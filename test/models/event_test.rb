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

require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
