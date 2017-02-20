const {Patient}=require('../models/patient');
var {myHasher}=require('../db/pwhash');
const nevConfig={
    verificationURL: 'http://localhost:3000/email-verification/${URL}',
    URLLength: 48,

    // mongo-stuff
    persistentUserModel: Patient,
    tempUserCollection: 'temporary_patients',
    emailFieldName: 'email',
    passwordFieldName: 'password',
    URLFieldName: 'GENERATED_VERIFYING_URL',
    expirationTime: 86400, // 86400 is 24 hours

    // emailing options
    transportOptions: {
        service: 'Gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        }
    },
    verifyMailOptions: {
        from: 'Do Not Reply <admin@clinic.com>',
        subject: 'Confirm your account',
        html: '<p>Please verify your account by clicking <a href="${URL}">this link</a>. If you are unable to do so, copy and ' +
                'paste the following link into your browser:</p><p>${URL}</p>',
        text: 'Please verify your account by clicking the following link, or by copying and pasting it into your browser: ${URL}'
    },
    shouldSendConfirmation: true,
    confirmMailOptions: {
        from: 'Do Not Reply <admin@clinic.com>',
        subject: 'Successfully verified!',
        html: '<p>Your account has been successfully verified.</p>',
        text: 'Your account has been successfully verified.'
    },

    hashingFunction: myHasher,
}

module.exports={nevConfig}
