json.user do
    json.extract! user, :id, :username, :email, :bio, :location
end
json.groups do
    user.groups.each do |group|
        json.set! group.id do 
            json.extract! group, :id, :title
        end
    end
end