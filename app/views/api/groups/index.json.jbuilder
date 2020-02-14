json.groups do    
    @groups.each do |group|
        json.set! group.id do 
            json.extract! group, :id, :title
            json.photoUrl group.photo.attached? ? url_for(group.photo) : "https://feetup-seeds.s3-us-west-1.amazonaws.com/no_photo.jpg"
            json.members do
                json.array! group.users.pluck(:id)
            end
            json.events do
                json.array! group.events.pluck(:id)
            end
        end
    end
end
json.events do 
    @events.each do |event|
            json.set! event.id do
            json.extract! event, :id, :name, :venue_location
            json.date event.date.to_date.to_s
            json.group event.group.title
            json.attendees do
                json.array! event.attendees.pluck(:id)
            end
        end
    end
end