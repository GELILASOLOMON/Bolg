import { useState , useEffect } from 'react';
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending , setIsPending]= useState(true);
    const [error , setError]= useState(null);

        useEffect(()=>{
          const abortCont = new AbortController();

            setTimeout(() =>{
             fetch(url , {signal: abortCont.signal })
                .then(res => {
                  if(!res.ok){
                    throw Error('could not fetch the data for that resourse')
                  }
                 return res.json() 
                  })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
          
                  })
                  .catch(err => {
                    if(err.name === 'AbortError'){
                      console.log('Fetch aborted');
                    }else{
                    setError(err.message);
                    setIsPending(false);
                    }
                  });
             }, 1000);

             return () => abortCont.abort();
          },[url]);

          return { data , isPending , error }
     
}
 
export default useFetch;

//fetch('http://localhost:8000/blogss') Get , first we get a response object not data to get data we have to do sth else

//return res.json() this passes the json into js object for us , returns another promise b/c it also asynchronous and it takes some time to do
//useEffect(()=>{},[]); can use a dependency array 