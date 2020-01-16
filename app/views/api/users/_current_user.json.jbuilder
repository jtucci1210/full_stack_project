json.extract! user, :id, :location, :username, :email, :bio
json.created_at user.created_at.to_date.to_s
json.events user.events.pluck(:id)