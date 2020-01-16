# == Schema Information
#
# Table name: groups
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  location    :string           not null
#  description :string           not null
#  private     :boolean          default(FALSE), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Group < ApplicationRecord
    validates :location, :description, presence: true
    validates :title, presence: true, uniqueness: true
    validates :private, inclusion: { in: [true, false] }

    
    has_many :memberships,
    foreign_key: :group_id,
    class_name: :Membership
    
    has_many :users,
        through: :memberships,
        source: :user

    has_many :events,
    foreign_key: :group_id,
    class_name: :Event 
    
    has_one_attached :photo
end
