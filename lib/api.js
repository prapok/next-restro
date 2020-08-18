// This gets called on every request 
export const getServerSideProps = async () => {

    const { API_URL } = process.env
    const res = await fetch(`${API_URL}/pages`)
    const data = await res.json()
    // Pass data to the page via props
    return { props: { pages: data } }
  }
