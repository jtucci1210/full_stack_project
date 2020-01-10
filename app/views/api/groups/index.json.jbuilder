    @groups.each do |group|
        json.set! group.id do 
            json.extract! group, :id, :title
            json.members do
                json.array! group.users.pluck(:id)
            end
        end
    end