import logo from './logo.svg';
import './App.css';
import Card from './Card'

function App() {
  const info = [{
    title: 'Free',
    price: '$0',
    duration: 'month',
    user: 'Single User',
    strongUser: false,
    storage: '5GB Storage',
    limit: 'Unlimited Public Projects',
    access: 'Community Access',
    private: false,
    support: false,
    subdomain: false,    
    strongSubdomain: false,
    status: false
  },
  {
    title: 'Plus',
    price: '$9',
    duration: 'month',
    user: '5 Users',
    strongUser: true,
    storage: '50GB Storage',
    limit: 'Unlimited Public Projects',
    access: 'Community Access',
    private: true,
    support: true,
    subdomain: true,
    strongSubdomain: false,
    status: false
  },
  {
    title: 'Pro',
    price: '$49',
    duration: 'month',
    user: 'Unlimited Users',
    strongUser: true,
    storage: '150GB Storage',
    limit: 'Unlimited Public Projects',
    access: 'Community Access',
    private: true,
    support: true,
    subdomain: true,
    strongSubdomain: true,
    status: true
  }];

  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {
            info.map((val) => {
              return <div className='col-lg-4'>
                <Card info ={val}></Card>
              </div>
            })
          }
        </div>
      </div>
    </section>
  );
}

export default App;
