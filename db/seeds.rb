# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


ApplicationRecord.transaction do 

    User.destroy_all
    Group.destroy_all
    Membership.destroy_all
    Event.destroy_all
    Rsvp.destroy_all

    require 'open-uri'

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
    
    file1 = open('https://feetup-seeds.s3-us-west-1.amazonaws.com/netflix.jpg')
    file2 = open('https://feetup-seeds.s3-us-west-1.amazonaws.com/drinks.jpg')
    file3 = open('https://feetup-seeds.s3-us-west-1.amazonaws.com/spa_days.jpg')
    file4 = open('https://feetup-seeds.s3-us-west-1.amazonaws.com/board_games.jpg')
    file5 = open('https://feetup-seeds.s3-us-west-1.amazonaws.com/computer_games.jpg')

    group1 = Group.create({title:"Netflix bingers", location:"San Francisco, CA", description:"When watching Netflix by yourself isn't fun enough", private: false})
    group1.photo.attach(io: file1, filename: 'netflix.jpg')
    group2 = Group.create({title:"Stay in with friends", location:"San Francisco, CA", description:"Why go out when we can all stay in together?", private: false})
    group2.photo.attach(io: file2, filename: 'drinks.jpg')
    group3 = Group.create({title:"Home spa Days!", location:"San Francisco, CA", description:"Spas are expensive, come over and we can treat ourselves", private: true})
    group3.photo.attach(io: file3, filename: 'spa_days.jpg')
    group4 = Group.create({title:"Games Games Games", location:"San Francisco, CA", description:"Board games, card games, everything!", private: false})
    group4.photo.attach(io: file4, filename: 'board_games.jpg')
    group5 = Group.create({title:"W.O.W. together", location:"San Francisco, CA", description:"LAN parties and wow together", private: false})
    group5.photo.attach(io: file5, filename: 'computer_games.jpg')

    Membership.create({ user_id: user1.id, group_id: group1.id })
    Membership.create({ user_id: user1.id, group_id: group2.id })
    Membership.create({ user_id: user1.id, group_id: group3.id })
    Membership.create({ user_id: user1.id, group_id: group4.id })
    Membership.create({ user_id: user1.id, group_id: group5.id })
    Membership.create({ user_id: user2.id, group_id: group1.id })
    Membership.create({ user_id: user2.id, group_id: group2.id })
    Membership.create({ user_id: user3.id, group_id: group1.id })
    Membership.create({ user_id: user3.id, group_id: group4.id })
    Membership.create({ user_id: user4.id, group_id: group4.id })
    Membership.create({ user_id: user4.id, group_id: group1.id })
    Membership.create({ user_id: user5.id, group_id: group5.id })
    Membership.create({ user_id: user5.id, group_id: group3.id })
    Membership.create({ user_id: user7.id, group_id: group3.id })
    
    event1 = Event.create({name: "Catan championship", group_id: group4.id, creator_id: user3.id, description: "Catan-athon until you can't stand the sight of another hextile. Friendships will be made and ruined. Yay!", 
        venue_location: "Eddies house", start_time: "6:00pm", end_time: "10:00pm", cost: "Free", date: "2021-02-18"})
    event2 = Event.create({name: "The Witcher marathon", group_id: group1.id, creator_id: user4.id, description: "I have popcorn, I have wine, I have blankets. Let's get this Witcher marathon on the role.", 
        venue_location: "Princess's Palace", start_time: "4:00pm", end_time: "11:00pm", cost: "Free", date: "2021-06-17"})
    event3 = Event.create({name: "Cucumber Peels and Shopping Deals", group_id: group3.id, creator_id: user7.id, description: "Let's get together and binge order discount home spa kits on amazon while we try out some new cucumber face masks.", 
        venue_location: "Karen's house", start_time: "11:00am", end_time: "4:00pm", cost: "$5", date: "2021-01-10"})
    
    Rsvp.create({ user_id: user1.id, event_id: event1.id })
    Rsvp.create({ user_id: user1.id, event_id: event2.id })
    Rsvp.create({ user_id: user1.id, event_id: event3.id })
    Rsvp.create({ user_id: user2.id, event_id: event2.id })
    Rsvp.create({ user_id: user3.id, event_id: event1.id })
    Rsvp.create({ user_id: user3.id, event_id: event1.id })
    Rsvp.create({ user_id: user3.id, event_id: event2.id })
    Rsvp.create({ user_id: user4.id, event_id: event2.id })
    Rsvp.create({ user_id: user5.id, event_id: event3.id })
    Rsvp.create({ user_id: user7.id, event_id: event3.id })
    

end