    @groups.each do |group|
        # :member_count = group.users.count
        json.set! group.id do 
           json.extract! group, :id, :title
           json.users do
            user_array = group.users.map do |user|
                user.id
            end
            json.array! user_array
           end
        end
    end