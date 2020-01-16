json.events do
    @events.each do |event|
        json.set! event.id do
            json.extract! event, :id, :name, :venue_location
            json.group event.group.title
            json.date event.date.to_date.to_s
            json.attendees do
                    json.array! event.attendees.pluck(:id)
            end
        end
    end
end