let mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    createdAt: Date,
    updatedAt: Date
})

module.exports = mongoose.model('User', userSchema)


userSchema.pre('save', function (next) {
    let now = Date.now()
     
    this.updatedAt = now
    // Set a value for createdAt only if it is null
    if (!this.createdAt) {
      this.createdAt = now
    }
    
    // Call the next function in the pre-save chain
    next()    
  })


userSchema.virtual('fullName').get(function() {
    return this.firstName + ' ' + this.lastName
  })
  
  userSchema.virtual('fullName').set(function(name) {
    let str = name.split(' ')
    
    this.firstName = str[0]
    this.lastName = str[1]
  })

 
userSchema.methods.getInitials = function() {
    return this.firstName[0] + this.lastName[0]
  }

  
  let model = new UserModel({
    firstName: 'Thomas',
    lastName: 'Anderson'
  })
  
  let initials = model.getInitials()
  console.log(initials) // This will output: TA

