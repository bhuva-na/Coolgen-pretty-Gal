import { useRouter } from 'next/router';
import products from '../../data/products'; // Import the products array
import { useState } from 'react'; // Import useState to handle size selection
import { Modal, Button } from 'react-bootstrap'; // Import Bootstrap's Modal and Button components
import Header from '../header';
import Footer from '@/components/footer';

const ProductDetail = () => {
    const router = useRouter();
    const { id } = router.query;

    // Check if id is valid before parsing
    const productId = id ? parseInt(id) : null;
    const product = products.find((prod) => prod.id === productId);

    // State for selected size, quantity, modal visibility, and chatbot visibility
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [showModal, setShowModal] = useState(false); 
    const [isWishlisted, setIsWishlisted] = useState(false); 
    const [showChatbot, setShowChatbot] = useState(false); // Chatbot visibility state
    const [messages, setMessages] = useState([]); // State for chatbot messages
    const [userMessage, setUserMessage] = useState(''); // User message input
    const getCurrentTimestamp = () => {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    // Handle size selection
    const handleSizeChange = (size) => setSelectedSize(size);

    // Handle quantity increment and decrement
    const handleQuantityChange = (amount) => setQuantity((prev) => Math.max(1, prev + amount));

    // Handle modal show/hide
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    // Handle wishlist toggle
    const handleWishlist = () => setIsWishlisted(!isWishlisted);

    // Handle chatbot toggle
    const toggleChatbot = () => setShowChatbot(!showChatbot);
    const handleSendMessage = () => {
        if (userMessage.trim() === '') return; // Prevent sending empty messages
        const timestamp = getCurrentTimestamp(); // Get current timestamp

        // Add user message with timestamp
        setMessages([...messages, { sender: 'user', text: userMessage, timestamp }]);
        setUserMessage(''); // Clear input field
        // Add a response from the bot (can be replaced with a real bot response logic)
        setTimeout(() => {
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: 'bot', text: '🌿 Kindly send a msg to Our Staff in Her WhatsAPP Number +91000000000, She will help you, Thank you', timestamp: getCurrentTimestamp() }
            ]);
        }, 1000); // Simulate bot response delay
    };

    // If product is not found, show error
    if (!product) {
        return <h1>Product not found!</h1>;
    }

    const isInStock = product.inStock;

    return (
        <div>
            <Header />
            <div style={containerStyle}>
                <div style={productDetailStyle}>
                    {/* Left section: Image */}
                    <div style={leftSectionStyle}>
                        <img src={product.image} alt={product.name} style={imageStyle} />
                    </div>

                    {/* Right section: Product details */}
                    <div style={rightSectionStyle}>
                        <h1>{product.name}</h1>

                        {/* Brand and Add to Wishlist */}
                        <div style={brandWishlistStyle}>
                            <p>Brand: <strong>{product.brand}</strong></p>
                            <button
                                onClick={handleWishlist}
                                style={{
                                    ...wishlistBtnStyle,
                                    color: isWishlisted ? 'red' : '#ff1744',
                                }}
                            >
                                ❤️ {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
                            </button>
                        </div>

                        {/* Price */}
                        <p style={priceStyle}>₹{product.price}</p>

                        {/* Size buttons */}
                        <div style={sizeSectionStyle}>
                            <p>Size:</p>
                            <div style={sizeButtonsContainerStyle}>
                            {['XL', 'M', 'L', 'XXL'].map((size) => (
    <button
        key={size}
        onClick={() => handleSizeChange(size)}
        disabled={!(product?.availableSizes && product.availableSizes.includes(size))} // Safely check availableSizes
        style={{
            ...sizeButtonStyle,
            border: selectedSize === size ? '2px solid #ff1744' : '1px solid #ccc',
            backgroundColor: selectedSize === size ? '#ff1744' : '#fff',
            color: selectedSize === size ? '#fff' : (product?.availableSizes && product.availableSizes.includes(size)) ? '#000' : '#ccc', // Dim color for unavailable sizes
            cursor: (product?.availableSizes && product.availableSizes.includes(size)) ? 'pointer' : 'not-allowed', // Change cursor for unavailable sizes
            opacity: (product?.availableSizes && product.availableSizes.includes(size)) ? 1 : 0.5, // Dim button for unavailable sizes
        }}
    >
        {size}
    </button>
))}

                            </div>
                            {/* View size chart link */}
                            <button onClick={handleShow} style={viewSizeChartBtnStyle}>VIEW SIZE CHART</button>
                        </div>

                        {/* Stock and Ask about product */}
                        <div style={stockAskBoxStyle}>
                            <div style={stockMessageStyle}>
                                <span style={{ fontSize: '20px', color: isInStock ? '#00a000' : '#ff1744' }}>
                                    {isInStock ? '✔' : '✖'}
                                </span>
                                <p style={stockTextStyle}>{isInStock ? 'In Stock' : 'Out of Stock'}</p>
                            </div>
                            {/* Ask about this product button */}
                            <button onClick={toggleChatbot} style={askProductBtnStyle}>
                                <span style={iconStyle}>💬</span> Ask about this product
                            </button>
                        </div>

                        {/* Quantity and price */}
                        <div style={quantitySectionStyle}>
                            <p>Quantity:</p>
                            <div style={quantityButtonsContainerStyle}>
                                <button onClick={() => handleQuantityChange(-1)} style={quantityBtnStyle}>-</button>
                                <input type="text" value={quantity} readOnly style={quantityInputStyle} />
                                <button onClick={() => handleQuantityChange(1)} style={quantityBtnStyle}>+</button>
                            </div>
                        </div>

                        {/* Total Price */}
                        <p>Total Price: ₹{(product.price * quantity).toFixed(2)}</p>

                        {/* Estimated delivery time */}
                        <p style={estimatedDeliveryStyle}>Estimated delivery time: 3 - 10 days</p>

                    </div>

                    {/* Floating Cart and Total Price in Footer */}
                    <div style={floatingCartStyle}>
                        <p>🛒 0 item(s)</p>
                        <p>₹{(product.price * quantity).toFixed(2)}</p>
                    </div>

                    {/* Modal for Size Chart */}
                    <Modal show={showModal} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Size Chart</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img 
                                src="/sizechart.jpg" 
                                alt="Size Chart" 
                                style={{ width: '100%' }} 
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>

            {/* Chatbot Component */}
            {showChatbot && (
                <div style={chatbotStyle}>
                    <div style={chatbotHeaderStyle}>
                        <h5>Hello! Pretty Gal</h5>
                        <button onClick={toggleChatbot} style={closeChatbotBtnStyle}>✖</button>
                    </div>
                    <div style={chatbotBodyStyle}>
                        <div className="chatbot-messages" style={chatContainerStyle}>
                            {messages.map((msg, index) => (
                                <div key={index} style={msg.sender === 'user' ? userMessageWrapperStyle : botMessageWrapperStyle}>
                                    {(
                                        <img src={userLogo} alt="User" style={logoStyle} />
                                    ) && msg.sender === 'user'}
                                    <div style={msg.sender === 'user' ? userMessageStyle : botMessageStyle}>
                                        <div style={messageTextStyle}>
                                            {msg.text}
                                        </div>
                                        <div style={timestampStyle}>{msg.timestamp || '1 week ago'}</div> {/* Display timestamp */}
                                    </div>
                                    {(
                                        <img src={botLogo} alt="Bot" style={logoStyle} />
                                    ) && msg.sender === 'bot'}
                                </div>
                            ))}
                        </div>
                        <div className="chatbot-input" style={inputContainerStyle}>
                            <input
                                type="text"
                                value={userMessage}
                                onChange={(e) => setUserMessage(e.target.value)}
                                placeholder="Type a message..."
                                style={inputStyle}
                            />
                            <button style={sendButtonStyle} onClick={handleSendMessage}>Send</button>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};
// Chatbot Styles
const userLogo = '';  // Replace with actual path
const botLogo = '/chatbotlogo.png';    // Replace with actual path

const chatbotStyle = {
  position: 'fixed',
  bottom: '0',
  right: '10px',
  width: '320px',
  backgroundColor: '#fff',
  border: '1px solid #ccc',
  borderRadius: '10px 10px 0 0',
  boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.2)',
  zIndex: 1000,
};

const chatbotHeaderStyle = {
  backgroundColor: '#ff007f',
  color: '#fff',
  padding: '10px',
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const chatbotBodyStyle = {
  padding: '10px',
  height: '250px',
  maxHeight: '300px',
  overflowY: 'auto',
  backgroundColor: '#f9f9f9',
};

const chatContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

const userMessageWrapperStyle = {
  display: 'flex',
  justifyContent: 'flex-end',  // User messages on the right
  alignItems: 'center',
  gap: '10px',                 // Space between logo and message
};

const botMessageWrapperStyle = {
  display: 'flex',
  justifyContent: 'flex-start', // Bot messages on the left
  alignItems: 'center',
  gap: '10px',                  // Space between logo and message
};

const userMessageStyle = {
  backgroundColor: '#ffe6f0',   // Light pink background for user messages
  color: '#ff007f',
  padding: '10px 15px',
  borderRadius: '20px 20px 0 20px', // Rounded corners for user messages
  maxWidth: '75%',
  wordWrap: 'break-word',
};

const botMessageStyle = {
  backgroundColor: '#fff',   // White background for bot messages
  border: '1px solid #ff007f',
  color: '#333',
  padding: '10px 15px',
  borderRadius: '20px 20px 20px 0', // Rounded corners for bot messages
  maxWidth: '75%',
  wordWrap: 'break-word',
};

const messageTextStyle = {
  marginBottom: '5px',
};

const timestampStyle = {
  fontSize: '12px',
  color: '#888',
  textAlign: 'right',
  marginTop: '5px',
};

const logoStyle = {
  width: '30px',
  height: '30px',
  borderRadius: '50%',
};

const inputContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: '10px',
};

const inputStyle = {
  width: '80%',
  padding: '10px',
  borderRadius: '20px',
  border: '1px solid #ccc',
  outline: 'none',
};

const sendButtonStyle = {
  backgroundColor: '#ff007f',
  color: '#fff',
  border: 'none',
  borderRadius: '20px',
  padding: '10px 15px',
  cursor: 'pointer',
  marginLeft: '10px',
};

const closeChatbotBtnStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  color: '#fff',
  cursor: 'pointer',
  fontSize: '16px',
};

  
// Define keyframes for chatbot sliding animation
const chatbotKeyframes = `
    @keyframes slideUp {
        from { transform: translateY(100%); }
        to { transform: translateY(0); }
    }`
;

// Styling
const stockMessageStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
};
const iconStyle = {
    fontSize: '20px',
};

// Style for the stock text (in stock or out of stock)
const stockTextStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    marginLeft: '5px',
};
const stockAskBoxStyle = {
    padding: '10px',
    border: '1px solid #ff007f', // border color for the box
    backgroundColor: '#ffe6f0',   // light pink background
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
};
const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
    flexDirection: 'column',
    maxWidth: '1400px',
    margin: 'auto',
    boxSizing: 'border-box',
};

const productDetailStyle = {
    marginTop:"8%",
    display: 'flex',
    flexDirection: 'row',
    gap: '30px',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: 'auto',
};

const leftSectionStyle = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const rightSectionStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '600px',
    justifyContent: 'center',
    marginTop: "18%"
};

const imageStyle = {
    width: '100%',
    height: '500px', // Fixed height
    objectFit: 'cover', // Cover the area
    maxWidth: '800px', // Optional: Set a max width
};

const brandWishlistStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
};

const priceStyle = {
    color: '#ff1744',
    fontSize: '24px',
    marginBottom: '10px',
};

const sizeSectionStyle = {
    marginBottom: '10px',
};

const sizeButtonsContainerStyle = {
    display: 'flex',
    gap: '10px',
};

const sizeButtonStyle = {
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
};

const viewSizeChartBtnStyle = {
    marginTop: '10px',
    backgroundColor: '#ff1744',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
};

const quantitySectionStyle = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
};

const quantityButtonsContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
};

const quantityBtnStyle = {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
};

const quantityInputStyle = {
    width: '40px',
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: '5px',
};

const estimatedDeliveryStyle = {
    marginTop: '20px',
    fontStyle: 'italic',
     border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    backgroundColor: 'lightgray',
};

const floatingCartStyle = {
    position: 'fixed',
    bottom: '10px',
    right: '10px',
    backgroundColor: '#ff1744',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
};

// Define the style for the wishlist button
const wishlistBtnStyle = {
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    fontSize: '18px',
};
const askProductBtnStyle = {
    padding: '8px 15px',
    backgroundColor: '#ff007f', // pink color for button
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
};




const inStockStyle = {
    backgroundColor: '#f0fff0',
    padding: '8px 15px',
    border: '1px solid #00a000',
    color: '#00a000',
    borderRadius: '5px', // Add border radius for a rounded look
    display: 'flex',
    alignItems: 'center',
    gap: '8px', // Space between text and icon (if needed)
    fontSize: '16px', // Adjust font size if needed
    fontWeight: 'bold',
};


export default ProductDetail;
