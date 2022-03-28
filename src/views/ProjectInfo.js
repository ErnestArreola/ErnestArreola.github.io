import React, {useState, useEffect} from 'react';

//data
import {projectList} from './Data';
import { useParams } from 'react-router-dom';

const features = [
    { name: 'Summary', description: 'Designed by Good Goods, Inc.'},
    { name: 'Role', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
    { name: 'Challenges', description: '6.25" x 3.55" x 1.15"' },
    { name: 'Stack', description: 'Hand sanded and finished with natural oil' },
    { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
    { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
  ]
  
  export default function Contact() {
    const {projectName}  = useParams();
    const[isLoading, setIsLoading] = useState(true);
    const[data, setData] = useState('');
    
    useEffect(()=> {
      setData(projectList.find(obj => obj.name === projectName));
      setIsLoading(false);
    }, [projectName] );

    return (
      <>
      {!isLoading && (
      <div id = "ProjectInfo"className="bg-white py-0 lg:h-screen">
        <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          <div>
    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"> {data.name}</h2>
            <p className="mt-4 text-gray-500">
              {data.description}
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {/* {data.map((feature) => ( */}
                <div key={data.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{data.summary}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{data.summary_defined}</dd>
                </div>

                 <div key={data.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{data.role}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{data.role_defined}</dd>
                  </div>
                  <div key={data.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{data.stack}</dt>
                  <dd className = "mt-2 text-sm text-gray-500"> {data.stack_defined}</dd>
                  
                  </div>
                  <div key={data.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{data.challenges}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{data.challenges_defined}</dd>
                  </div>
                  <div key={data.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{data.year}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{data.year_defined}</dd>
                  </div>
                  <div key={data.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{data.links}</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    <a href = {`${data.links_defined.link}`} target = "_blank" className = "link hover:text-black">
                        {data.links_defined.name}
                    </a>                    
                    </dd>
                  </div>
              {/* ))} */}
            </dl>
          </div>
          <div className="grid grid-rows-1 gap-4 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1  sm:gap-6 lg:gap-8">
            {data.images.map((im) => (

              <img src = {im.image}></img>
            ))

            }




            {/* <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="bg-gray-100 rounded-lg"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="bg-gray-100 rounded-lg"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="bg-gray-100 rounded-lg"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="bg-gray-100 rounded-lg"
            /> */}
          </div>
        </div>
      </div>
      )}
      </>
    )
  }