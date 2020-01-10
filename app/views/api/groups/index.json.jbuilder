    @groups.each do |group|
        json.set! group.id do 
            json.extract! group, :id, :title
            json.member_count group.users.length
        end
    end