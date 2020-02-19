json.events do 
    json.set! @event.id do
        json.extract! @event, :id, :name, :description, :venue_location, :creator_id, :cost, :start_time, :end_time
        
        json.date @event.date.to_date.to_s
        json.photoUrl @event.photo.attached? ? url_for(@event.photo) : "https://feetup-seeds.s3-us-west-1.amazonaws.com/no_photo.jpg"
        json.attendees do
            json.array! @event.attendees.pluck(:id)
        end
    end
end
json.users do 
    @event.attendees.each do |user|
        json.set! user.id do 
            json.extract! user, :id, :username
            json.created_at user.created_at.to_date.to_s
        end
    end
end
json.groups do 
    json.set! @event.group.id do 
        json.extract! @event.group, :id, :title, :private
        json.photoUrl @event.group.photo.attached? ? url_for(@event.group.photo) : "https://feetup-seeds.s3-us-west-1.amazonaws.com/no_photo.jpg"
    end
end