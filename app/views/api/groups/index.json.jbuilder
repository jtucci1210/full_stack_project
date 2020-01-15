    @groups.each do |group|
        json.set! group.id do 
            json.extract! group, :id, :title
            json.photoUrl group.photo.attached? ? url_for(group.photo) : "https://feetup-dev.s3-us-west-1.amazonaws.com/no_photo.jpg"
            json.members do
                json.array! group.users.pluck(:id)
            end
        end
    end