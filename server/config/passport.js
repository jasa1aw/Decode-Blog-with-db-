const passport = require('passport');
const User = require('../auth/User');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local');
const GitHubStrategy = require('passport-github2').Strategy;

passport.use( new LocalStrategy(
    {
        usernameField: 'email' 
    },
    function(email, password, done){
        User.findOne({email})
        .then(user => {
            bcrypt.compare(password, user.password, function(err, result) {
                if(err){
                    return done(err)
                }
                if(result) {return done(null, user)};
            });
        }).catch(e => {
            return done(e)
        })
    }
))

passport.use(new GitHubStrategy({
    clientID: 'e7d469fed8efb2281185',
    clientSecret: '621bd0623000d3499ba78097ebf17005bd5d62cb',
    callbackURL: "http://localhost:3000/api/auth/github"
},
async function(accessToken, refreshToken, profile, done){
    const user = await User.findOne({ githubId: profile.id});
    try {
        if(user){
            return done(null, user)
        }else{
            const newUser = new User({
                githubId: profile.id,
                full_name: profile.username,
            })
            await newUser.save()
            return done(null, newUser);;
        }
    } catch (err) {
        console.log(err);
    }
}
))
passport.serializeUser(function(user, done){
    console.log(user);
    done(null, user.id)
});

passport.deserializeUser(function(id, done){
    console.log(id);
    User.findById(id).then(user => {
        done(null, user);
    }).catch(e => {
        return done(e)
    })
})