export default function PostsLayout ({ children }) {
  return (
    <div>
      <marquee style={{ backgroundColor: 'black', color: '#09f', fontSize: '15px', borderRadius: '5px' }}>
        ♣ Yurchik • Diablo ♣
      </marquee>
      {children}
    </div>
  )
}
