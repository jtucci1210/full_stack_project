# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Group.destroy_all
Membership.destroy_all

user1 = User.create({username:"Demo", password: 123456, email:"demo@gmail.com", location:"San Francisco, CA", bio:""})
user2 = User.create({username:"JP", password: 123456, email:"jp@gmail.com", location:"San Francisco, CA", bio:""})
user3 = User.create({username:"Eddie", password: 123456, email:"eddie@gmail.com", location:"San Francisco, CA", bio:""})
user4 = User.create({username:"Princess", password: 123456, email:"princess@gmail.com", location:"San Francisco, CA", bio:"The witcher is way better with short hair"})
user5 = User.create({username:"MargieBaby", password: 123456, email:"MargieBaby@gmail.com", location:"San Francisco, CA", bio:"Huh?"})
user6 = User.create({username:"JareBear", password: 123456, email:"JareBear@gmail.com", location:"San Francisco, CA", bio:"I like panda the best"})
user7 = User.create({username:"karen", password: 123456, email:"karen@gmail.com", location:"San Francisco, CA", bio:""})
user8 = User.create({username:"joe", password: 123456, email:"joe@gmail.com", location:"San Francisco, CA", bio:""})
user9 = User.create({username:"Matty Matt", password: 123456, email:"Matt@gmail.com", location:"San Francisco, CA", bio:""})
user10 = User.create({username:"ILikeTurtles", password: 123456, email:"ILikeTurtles@gmail.com", location:"San Francisco, CA", bio:""})
user11 = User.create({username:"uSeRWhO", password: 123456, email:"uSeRWhO@gmail.com", location:"San Francisco, CA", bio:""})
 
group1 = Group.create({title:"Netflix bingers", location:"San Francisco, CA", description:"When watching Netflix by yourself isn't fun enough", private: false})
group2 = Group.create({title:"Stay in with friends", location:"San Francisco, CA", description:"Why go out when we can all stay in together?", private: false})
group3 = Group.create({title:"Home spa Days!", location:"San Francisco, CA", description:"Spas are expensive, come over and we can treat ourselves", private: true})
group4 = Group.create({title:"Games Games Games", location:"San Francisco, CA", description:"Board games, card games, everything!", private: false})
group5 = Group.create({title:"W.O.W. together", location:"San Francisco, CA", description:"LAN parties and wow together", private: false})

Membership.create({ user_id: user1.id, group_id: group1.id })
Membership.create({ user_id: user1.id, group_id: group2.id })
Membership.create({ user_id: user1.id, group_id: group3.id })
Membership.create({ user_id: user1.id, group_id: group4.id })
Membership.create({ user_id: user1.id, group_id: group5.id })
Membership.create({ user_id: user2.id, group_id: group1.id })
Membership.create({ user_id: user2.id, group_id: group2.id })
Membership.create({ user_id: user3.id, group_id: group1.id })
Membership.create({ user_id: user4.id, group_id: group4.id })
Membership.create({ user_id: user5.id, group_id: group5.id })