import { useState } from "react"
import api from "../api/axios";


export default function Home(){
    const[url,setUrl]=useState("");
    const[shortUrl,setShortUrl]=useState("");


    const submit=async(e)=>{
        e.preventDefault();
        const res=await api.post("/url/shorten",{
      originalUrl: url,
    });
    setShortUrl(res.data.shortUrl);
    }

    return(
        <div>
      <h2>URL Shortener</h2>

      <form onSubmit={submit}>
  <input
  placeholder="Enter long URL"
        value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button>Shorten</button>
      </form>

 {shortUrl && (
        <p>
          Short URL: <a href={shortUrl}>{shortUrl}</a>
        </p>
      )}
</div>
    )
}