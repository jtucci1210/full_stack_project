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
    file6 = open('https://feetup-seeds.s3-us-west-1.amazonaws.com/cooking.jpg')
    file7 = open('https://feetup-seeds.s3-us-west-1.amazonaws.com/video_games.jpg')
    file8 = open('https://feetup-seeds.s3-us-west-1.amazonaws.com/camping.jpg')
    file9 = open('https://feetup-seeds.s3-us-west-1.amazonaws.com/garage_band.jpg')
    file10 = open('https://feetup-seeds.s3-us-west-1.amazonaws.com/gardening.jpg')

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
    group6 = Group.create({title:"Cooking For One", location:"San Francisco, CA", description:"Microwave meals are lame. We teach each other how to cook well for yourself. Must have video chat enabled, we don't share kitchens so as to avoid messes.", private: false})
    group6.photo.attach(io: file6, filename: 'cooking.jpg')
    group7 = Group.create({title:"Fortnight Fights", location:"San Francisco, CA", description:"Lets cheer each other on as we construct our way to victory!", private: false})
    group7.photo.attach(io: file7, filename: 'video_games.jpg')
    group8 = Group.create({title:"Backyard Camping", location:"San Francisco, CA", description:"Camping is better when there is an actual bathroom nearby, don't you think?", private: true})
    group8.photo.attach(io: file8, filename: 'camping.jpg')
    group9 = Group.create({title:"Garage Band, Literally", location:"San Francisco, CA", description:"If you have a large garage and feel like hosting we are always in need of new space. Our roommates and parents don't seem to find us as talented as we do.", private: false})
    group9.photo.attach(io: file9, filename: 'garage_band.jpg')
    group10 = Group.create({title:"Game of Gnomes", location:"San Francisco, CA", description:"Gardening how-tos in and no-no's. Let's meet and share tips on how we keep our yards and landscaping beautiful and dog poop free.", private: false})
    group10.photo.attach(io: file10, filename: 'gardening.jpg')

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
    Membership.create({ user_id: user6.id, group_id: group9.id })
    Membership.create({ user_id: user7.id, group_id: group3.id })
    Membership.create({ user_id: user8.id, group_id: group8.id })
    Membership.create({ user_id: user8.id, group_id: group7.id })
    Membership.create({ user_id: user8.id, group_id: group9.id })
    Membership.create({ user_id: user9.id, group_id: group7.id })
    Membership.create({ user_id: user9.id, group_id: group10.id })
    Membership.create({ user_id: user10.id, group_id: group6.id })
    Membership.create({ user_id: user10.id, group_id: group7.id })
    Membership.create({ user_id: user2.id, group_id: group7.id })
    Membership.create({ user_id: user2.id, group_id: group8.id })
    Membership.create({ user_id: user1.id, group_id: group10.id })
    Membership.create({ user_id: user3.id, group_id: group6.id })
    Membership.create({ user_id: user7.id, group_id: group7.id })
    
    event1 = Event.create({name: "Catan championship", group_id: group4.id, creator_id: user3.id, description: "Catan-athon until you can't stand the sight of another hextile. Friendships will be made and ruined. Yay!", 
        venue_location: "Eddies house", start_time: "6:00pm", end_time: "10:00pm", cost: "Free", date: "2021-02-18"})
    event2 = Event.create({name: "The Witcher marathon", group_id: group1.id, creator_id: user4.id, description: "I have popcorn, I have wine, I have blankets. Let's get this Witcher marathon on the role.", 
        venue_location: "Princess's Palace", start_time: "4:00pm", end_time: "11:00pm", cost: "Free", date: "2021-06-17"})
    event3 = Event.create({name: "Cucumber Peels and Shopping Deals", group_id: group3.id, creator_id: user7.id, description: "Let's get together and binge order discount home spa kits on amazon while we try out some new cucumber face masks.", 
        venue_location: "Karen's house", start_time: "11:00am", end_time: "4:00pm", cost: "Free", date: "2021-01-10"})
    event4 = Event.create({name: "Joe's House Band Practice", group_id: group9.id, creator_id: user8.id, description: "You know the drill. I have drums. You bring whatever else you want to jam out on.", 
        venue_location: "Joe's Place, Oakland", start_time: "11:00am", end_time: "4:00pm", cost: "Free", date: "2021-11-10"})
    event5 = Event.create({name: "Thai Food How-to", group_id: group6.id, creator_id: user10.id, description: "Do you ever dream of creating your favorite Thai dishes on your own? And have fun while learning to cook healthy delicious food? Now you can learn how to cook authentic Thai dishes from a real expert Thai chef. Let Chef Saithong help you unlock the secrets that have made Thai food so sought after around the world.", 
        venue_location: "Turtle Island", start_time: "11:00am", end_time: "4:00pm", cost: "Free", date: "2021-03-21"})
    event6 = Event.create({name: "Lilies and Lilac's", group_id: group10.id, creator_id: user1.id, description: "Lilacs do come in seven colors, but most are familiar with the common lilac, Syringa vulgaris, which blooms in the northern states for 2 weeks in late May. However, there are early-, mid-, and late-season lilacs, which, when grown together, ensure a steady bloom for at least 6 weeks.", 
        venue_location: "Demo's Digs", start_time: "11:00am", end_time: "4:00pm", cost: "Free", date: "2021-01-12"})
    event7 = Event.create({name: "My tent can sleep 10!", group_id: group8.id, creator_id: user8.id, description: "Don't forget the darn s'mores this time people...", 
        venue_location: "Yard behind Joe's house", start_time: "11:00am", end_time: "4:00pm", cost: "Free", date: "2021-07-08"})
    event8 = Event.create({name: "DND New Campaign", group_id: group4.id, creator_id: user4.id, description: "The Pathfinder Roleplaying Game is a fantasy role-playing game (RPG) that was published in 2009 by Paizo Publishing. The first edition extends and modifies the System Reference Document (SRD) based on the revised 3rd edition Dungeons & Dragons (D&D) published by Wizards of the Coast under the Open Game License (OGL), and is intended to be backward-compatible with that edition. The first major revision of the ruleset, Pathfinder 2nd Edition, was released in August 2019.", 
        venue_location: "Princess's Palace", start_time: "11:00am", end_time: "4:00pm", cost: "Free", date: "2021-09-10"})
    event9 = Event.create({name: "Homemade pasta with local Chef from restaurant down the street", group_id: group6.id, creator_id: user3.id, description: "No more store bought dried noodle sticks after coming to this event!", 
        venue_location: "Eddie's house", start_time: "11:00am", end_time: "4:00pm", cost: "$10", date: "2021-10-20"})
    event10 = Event.create({name: "Arkham Horror: Learn How to Play", group_id: group4.id, creator_id: user3.id, description: "Arkham Horror is a cooperative adventure game themed around H.P Lovecraft's Cthulhu Mythos. Players choose from 16 Investigators and take to the streets of Arkham. Before the game, one of the eight Ancient Ones is chosen and it's up to the Investigators to prevent it from breaking into our world.", 
        venue_location: "Eddie's Basement", start_time: "11:00am", end_time: "4:00pm", cost: "Free", date: "2021-04-18"})
    event11 = Event.create({name: "One Night of One Night Werewolf", group_id: group4.id, creator_id: user1.id, description: "One Night Ultimate Werewolf is a fast-paced game where everyone gets to be a different role. In the course of only one night and the following morning, the players will determine who among them is a werewolf...hopefully. One Night Ultimate Werewolf is a microgame of the party game Ultimate Werewolf that doesn't need a moderator. There's no elimination, and each game lasts about 10 minutes.", 
        venue_location: "Demo's Digs", start_time: "11:00am", end_time: "4:00pm", cost: "Free", date: "2021-04-20"})
    event12 = Event.create({name: "Tree Pruning for your Citrus Babies", group_id: group10.id, creator_id: user9.id, description: "Grafting, pruning, and general care. Bring your shears.", 
        venue_location: "Matt's Greenhouse", start_time: "11:00am", end_time: "4:00pm", cost: "Free", date: "2021-08-25"})
    
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