import reviewsData from "../data1/reviewsData";

export const Review = () => {
  return (
    <div className="container my-4">

      {reviewsData.map(item => (
        <div
          key={item.id}
          className="border border-secondary-subtle rounded-3 p-3 mb-3 bg-dark text-light"
        >
        
          <h6 className="fw-bold mb-1">{item.name}</h6>

          
          <div className="d-flex align-items-center mb-2">

            {[...Array(item.rateCount)].map((_, i) => (
              <span key={i} className="text-warning small">★</span>
            ))}

            <span className="mx-2 text-secondary">|</span>

            <span className="text-secondary small">{item.date}</span>
          </div>


          <p className="text-secondary mb-0">
            {item.review}
          </p>
        </div>
      ))}

    </div>
  );
};

export default Review;
