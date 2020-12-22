import React, {useEffect, useState} from 'react';
import {Doughnut} from 'react-chartjs-2';




export default () => {
  const [x, setX] = useState();
  const [y, setY] = useState();

  useEffect(() => {
    setX(200);
  setY(600);
  },[])

  const data = {
    labels: [
      'Arrecadado',
      'Falta           ',
    
    ],
    datasets: [{
      data: [x, y],
      backgroundColor: [
      '#F27EA5',
      '#756E8D',
    
      ],
      hoverBackgroundColor: [
      '#F27EA5',
      '#756E8D',
    
      ]
    }]
  };
  
  return(
    <div className="flex flex-col justify-center items-center ">
		<h2></h2>
		<Doughnut
			data={data}
			width={200}
			height={200}
		/>
	</div>
  )
}
