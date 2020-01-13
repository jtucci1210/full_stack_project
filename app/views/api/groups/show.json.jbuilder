json.groups do
    json.set! @group.id do
        json.extract! @group, :id, :title, :description, :location, :private
        json.created_at @group.created_at.to_date.to_s
    end
end
json.users do 
    @group.users.each do |user|
        json.set! user.id do 
            json.extract! user, :id, :username
        end
    end
end
