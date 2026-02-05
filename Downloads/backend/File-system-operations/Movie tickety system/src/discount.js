function discount(userType, totalAmount) {
  let discountPercent = 0;

  if (userType === "Standard") {
    discountPercent = 5;
  } else if (userType === "VIP") {
    discountPercent = 12;
  }

  const discountAmount = (totalAmount * discountPercent) / 100;

  return {
    discountPercent,
    discountAmount,
    finalAmount: totalAmount - discountAmount,
  };
}

export default discount;