json.events do
    @events.each do |event|
        json.set! event.id do
            json.extract! event, :id, :name, :venue_location
            json.group event.group.title
            json.date event.date.to_date.to_s
            json.photoUrl event.photo.attached? ? url_for(event.photo) : "https://feetup-seeds.s3-us-west-1.amazonaws.com/no_photo.jpg"
            json.attendees do
                    json.array! event.attendees.pluck(:id)
            end
        end
    end
end