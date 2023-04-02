import React from 'react'

const Loading = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLoading(true);
        }, 7000);
    
        return () => {
          clearTimeout(timeoutId);
        };
      }, []);
  return (
    <div> The page is Loading</div>
  )
}

export default Loading