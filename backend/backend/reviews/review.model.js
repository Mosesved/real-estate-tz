// Trust / Review Model (NO brokerId)

const Review = {
  listingId: String,     // tangazo / nyumba iliyopostiwa
  reviewerName: String,  // jina la aliyetoa maoni
  comment: String,       // maoni
  rating: Number,        // 1 - 5
  createdAt: Date
};

module.exports = Review;
