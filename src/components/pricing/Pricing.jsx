import React from 'react';
import './Pricing.css';

const pricingPlans = [
  {
    title: 'Basic',
    price: '$14.99',
    features: ['Full access to all the features', 'Up to 5 Projects', 'Priority Support', 'Basic UI/UX design', 'Custom Domain Registered'],
    buttonText: 'Get Started',
    buttonClass: 'btn-outline'
  },
  {
    title: 'Standard',
    price: '$49.99',
    features: ['Full access to all the features', 'Up to 25 Projects', 'Priority Support', 'Advanced UI/UX design', 'Custom Domain Registered'],
    buttonText: 'Purchase Now',
    buttonClass: 'btn-filled',
    popular: true
  },
  {
    title: 'Premium',
    price: '$89.99',
    features: ['Full access to all the features', 'Unlimited Projects', 'Priority Support', 'Premium UI/UX design', 'Custom Domain Registered'],
    buttonText: 'Get Started',
    buttonClass: 'btn-outline'
  }
];

const Pricing = () => {
  return (
    <div className="pricing-page">
      <h2 className="page-title">Pricing</h2>
      
      <div className="pricing-cards">
        {pricingPlans.map((plan, index) => (
          <div className={`pricing-card ${plan.popular ? 'popular' : ''}`} key={index}>
            <h3 className="plan-title">{plan.title}</h3>
            <div className="plan-price">{plan.price}</div>
            <div className="plan-trial">Free Trial</div>
            
            <ul className="plan-features">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            
            <button className={`plan-btn ${plan.buttonClass}`}>
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
