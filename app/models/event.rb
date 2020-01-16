# == Schema Information
#
# Table name: events
#
#  id             :bigint           not null, primary key
#  name           :string           not null
#  group_id       :integer          not null
#  creator_id     :integer          not null
#  description    :string           not null
#  venue_location :string           not null
#  start_time     :string           not null
#  end_time       :string           not null
#  cost           :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  date           :datetime         not null
#

class Event < ApplicationRecord
    validates :group_id, :creator_id, :description, :venue_location, presence: true
    validates :start_time, :end_time, :date, :cost, presence: true 
    validates :name, presence: true, uniqueness: true 

    belongs_to :group 

    belongs_to :creator,
    foreign_key: :creator_id,
    class_name: :User

    has_many :rsvps,
    foreign_key: :event_id,
    class_name: :Rsvp

    has_many :attendees,
    through: :rsvps,
    source: :user

    has_one_attached :photo
end
