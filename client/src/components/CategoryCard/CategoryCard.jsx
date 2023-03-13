import React from 'react'
import "./CategoryCard.scss"
import {Link} from 'react-router-dom'
const CategoryCard = () => {
  return (
    <div className='category-card'>
        <div className="col">
            <div className="row">
            <img
            src="https://images.unsplash.com/photo-1599433762903-b541f08b9aea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
            alt=""
          />
          <button>
            <Link className="link" to="/categories/1">
              Toys
            </Link>
          </button>
            </div>
            <div className="row">
            <img
            src="https://images.unsplash.com/photo-1565151448704-33d96c51fff0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
            alt=""
          />
          <button>
            <Link className="link" to="/categories/1">
              Sale
            </Link>
          </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
            <img
            src="https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
            alt=""
          />
          <button>
            <Link className="link" to="/categories/1">
              Electronics
            </Link>
          </button>
            </div>
        </div>
        <div className="col col2">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img
                    src="https://images.unsplash.com/photo-1611526114392-8d8e229f511d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1451&q=80"
                    alt=""
                    />
          <button>
            <Link className="link" to="/categories/1">
              Accessories
            </Link>
          </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img
            src="https://images.unsplash.com/photo-1585667055741-7a94f3397509?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
          <button>
            <Link className="link" to="/categories/1">
              Featured
            </Link>
          </button>
                    </div>
                </div>
            </div>
            <div className="row">
            <img
            src="https://images.unsplash.com/photo-1543940610-6c1cb4aa5c62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
          <button>
            <Link className="link" to="/categories/1">
              Media
            </Link>
          </button>
            </div>
        </div>
    </div>
  )
}

export default CategoryCard