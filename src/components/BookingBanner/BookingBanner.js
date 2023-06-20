import Button from 'react-bootstrap/Button';
import './BookingBanner.css';


function BookingBanner() {
    

    return (
        <main>
            <div>
                <Button className='booking__banner' href="/book_adventure">Check Dates</Button>
            </div>
        </main>
    );
};

export default BookingBanner;