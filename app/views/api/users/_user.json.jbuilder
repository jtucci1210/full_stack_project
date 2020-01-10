json.users do
    json.set! user.id do
        json.extract! user, :id, :username, :email, :bio, :location
    end
end
json.groups do
    user.groups.each do |group|
        json.set! group.id do 
            json.extract! group, :id, :title
        end
    end
end