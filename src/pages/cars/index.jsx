import React, { useState, useRef } from 'react'; 
import { Modal } from "reactstrap";
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';


const Index= () => {
  const [cars, setCars] = useState([
    { id: nanoid(), name: "Mers", price: 250000000, brand: "Mers", year: "12.02.2015" }
  ]);
  const [modal, setModal] = useState(false);
  const [carName, setCarName] = useState('');
  const [carPrice, setCarPrice] = useState('');
  const [carBrand, setCarBrand] = useState('');
  const [carYear, setCarYear] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCarId, setSelectedCarId] = useState(null);
  const formRef = useRef(null); 
  const navigate = useNavigate()

  const openAddModal = () => {
    setCarName('');
    setCarPrice('');
    setCarBrand('');
    setCarYear('');
    setSelectedCarId(null);
    setModal(true);
  };

  const openUpdateModal = (car) => {
    setCarName(car.name);
    setCarPrice(car.price);
    setCarBrand(car.brand);
    setCarYear(car.year);
    setSelectedCarId(car.id);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleAddCar = () => {
    if (!carName || !carPrice || !carBrand || !carYear) {
      alert('Please fill in all fields');
      return;
    }
    const newCar = {
      id: nanoid(),
      name: carName,
      price: carPrice,
      brand: carBrand,
      year: carYear
    };
    setCars([...cars, newCar]);
    closeModal();
  };

  const handleDelete = (id) => {
    const updatedCars = cars.filter(car => car.id !== id);
    setCars(updatedCars);
  };


  const handleUpdateCar = () => {
    if (!carName || !carPrice || !carBrand || !carYear) {
      alert('Please fill in all fields');
      return;
    }
    
    const updatedCars = cars.map(car => {
      if (car.id === selectedCarId) {
        return {
          ...car,
          name: carName,
          price: carPrice,
          brand: carBrand,
          year: carYear
        };
      }
      return car;
    });
  
    setCars(updatedCars);
    closeModal();
  };

  const filteredCars = cars.filter(car =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.year.includes(searchTerm)
  );

  return (
    <>
      <Modal isOpen={modal} toggle={closeModal}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{selectedCarId ? 'Update Car' : 'Add Car'}</h5>
              <button type="button" className="close" onClick={closeModal} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form ref={formRef}> 
                <input type="text" placeholder="Car Name" className="form-control mb-2" value={carName} onChange={(e) => setCarName(e.target.value)} />
                <input type="text" placeholder="Price" className="form-control mb-2" value={carPrice} onChange={(e) => setCarPrice(e.target.value)} />
                <input type="text" placeholder="Brand" className="form-control mb-2" value={carBrand} onChange={(e) => setCarBrand(e.target.value)} />
                <input type="text" placeholder="Year" className="form-control mb-2" value={carYear} onChange={(e) => setCarYear(e.target.value)} />
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={closeModal}>Cancel</button>
              {selectedCarId ?
                <button type="button" className="btn btn-primary" onClick={handleUpdateCar}>Update</button> :
                <button type="button" className="btn btn-primary" onClick={handleAddCar}>Save</button>
              }
            </div>
          </div>
        </div>
      </Modal>
      <div className="container align-items-center">
        <div className="row mt-4">
          <div className="col-md-8 offset-2">
            <div className="row">
              <div className="col-4">
                <button type='button' className='btn btn-success' onClick={openAddModal}>Add Car</button>
              </div>
              <div className="col-8">
                <input type="text" placeholder='Search...' className='form-control' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-8">
            <table className='table table-bordered'>
              <thead>
                <tr>
                  <td>T/r</td> 
                  <td>Name</td>
                  <td>Price</td>
                  <td>Brand</td>
                  <td>Year</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {filteredCars.map((item, index) => (
                  <tr key={index}>
                    <td>{index+1}</td> 
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.brand}</td>
                    <td>{item.year}</td>
                    <td>
                      <button type='button' className='btn btn-danger mx-2' onClick={() => handleDelete(item.id)}>Delete</button> 
                      <button type='button' className='btn btn-info mx-2' onClick={() => openUpdateModal(item)}>Update</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
