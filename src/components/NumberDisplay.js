import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const NumberDisplay = () => {
  const numbers = useSelector((state) => state.numbers);
  const [currentNumber, setCurrentNumber] = useState(null);
  const [latestNumber, setLatestNumber] = useState(null);

  useEffect(() => {
    if (numbers.length > 0) {
        
    //const latestNumber = numbers[numbers.length - 1];
      setCurrentNumber(numbers[numbers.length - 1]);
      setLatestNumber(numbers[numbers.length - 2]);
    }
  }, [numbers]);

  const getColor = (number, latestNumber) => {
    if (latestNumber === null || number === null) {
      return 'white'; // estado inicial, sem próximo numero ou anterior
    } else if (number > latestNumber) {
      return '#00f200'; // maior que o número atual
    } else if (number < latestNumber) {
      return '#BB000E'; // menor que o número atual
    } else {
      return 'white'; // numero igual ao atual
    }
  };

  return (
    <div>
      <h2 className="-mt-12 text-xl font-bold">Latest Received Number:</h2>
      <p style={{ color: getColor(currentNumber, latestNumber), fontSize: '2em', fontWeight: 'bold', marginTop: '35px' }}>
        {currentNumber !== null ? currentNumber : 'Waiting data'}
      </p>
    </div>
  );
};

export default NumberDisplay;
