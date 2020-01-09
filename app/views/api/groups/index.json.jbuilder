json.groups do
    @groups.each do |group|
        member_count = group.users.count
        json.group.id do 
           json.extract! group, :id, :title, member_count
        end
    end
end