import "./App.css";
import "./contacts.json";
import { useState } from 'react';


function App() {
  const [sortByPopularity, setSortByPopularity] = useState(false);

  const sortContactsByPopularity = () => {
    const sortedContacts = [...contacts];
    sortedContacts.sort((a, b) => {
      return sortByPopularity ? a.popularity - b.popularity : b.popularity - a.popularity;
    });
    setContacts(sortedContacts);
    setSortByPopularity(!sortByPopularity); // Toggle sorting order
  };
  

  const [contacts, setContacts] = useState([
    {
      "name": "Idris Elba",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
      "popularity": 11.622713,
      "id": "11731993-0604-4bee-80d5-67ad845d0a38",
      "wonOscar": false,
      "wonEmmy": false
    },
    {
      "name": "Johnny Depp",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
      "popularity": 15.656534,
      "id": "7dad00f7-3949-477d-a7e2-1467fd2cfc06",
      "wonOscar": false,
      "wonEmmy": false
    },
    {
      "name": "Monica Bellucci",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/qlT4904d8oi2NIs28RrgnIZDFZB.jpg",
      "popularity": 16.096436,
      "id": "0ad5e441-3084-47a1-9e9b-b917539bba71",
      "wonOscar": false,
      "wonEmmy": false
    },
    {
      "name": "Gal Gadot",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/34kHAyBaBhq2kUrmhM15paEBuuI.jpg",
      "popularity": 10.049256,
      "id": "b497e3c4-50bb-4ae2-912f-eb36802c5bc2",
      "wonOscar": false,
      "wonEmmy": true
    },
    {
      "name": "Ian McKellen",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/coWjgMEYJjk2OrNddlXCBm8EIr3.jpg",
      "popularity": 10.070132,
      "id": "0067ae32-97b6-4431-898e-eb1c10150abb",
      "wonOscar": true,
      "wonEmmy": false
    }
  ]);

    const addContacts = () => {
      const randomContacts = getRandomContacts(3);
      setContacts([...contacts, ...randomContacts]);
    };
  
    const getRandomContacts = (count) => {
      const availableContacts = contacts.filter(
        (contact) => !contacts.some((c) => c.id === contact.id)
      );
  
      const randomIndexes = [];
      while (randomIndexes.length < count && randomIndexes.length < availableContacts.length) {
        const randomIndex = Math.floor(Math.random() * availableContacts.length);
        if (!randomIndexes.includes(randomIndex)) {
          randomIndexes.push(randomIndex);
        }
      }
  
      return randomIndexes.map((index) => availableContacts[index]);
    };

    const deleteContact = contactId =>{
      const filteredContacts = contacts.filter(contact =>{
        return contact.id !== contactId;
      });
      setContacts(filteredContacts);
    }

  return (
    <div className="App">
      <div className="table-container">
      <h1>Contact List</h1>
      <button onClick={addContacts}>Add Contacts</button><br></br>
      <button onClick={sortContactsByPopularity}>
        {sortByPopularity ? 'Sort by Ascending Popularity' : 'Sort by Descending Popularity'}
      </button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Ciao Kakao</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td>
                <img className="table-image" src={contact.pictureUrl} alt={contact.name} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar && <p>🏆</p>}</td>
              <td>{contact.wonEmmy && <p>🏆</p>}</td>
              <td><button onClick={() => deleteContact(contact._id)} className="btn-delete">YEET</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default App;