

homepage = async (req, res) => {
  res.render('index', { title: 'Home Page'} )
}

module.exports = { 
  homepage
}