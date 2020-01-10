json.groups do
    json.set! @group.id do
        json.extract! @group, :id, :title, :description, :created_at
    end
end
json.users do 
    @group.users.each do |user|
        json.set! user.id do 
            json.extract! user, :id, :username
        end
    end
end
