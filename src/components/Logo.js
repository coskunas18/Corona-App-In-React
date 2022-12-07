import PropTypes from 'prop-types'

const Logo = ({logo,title}) =>{

    return(

        <div className='flex items-center'>
           <img src={logo} alt={title} className="mr-3 h-10" />
           <span className='self-center text-xl font-semibold whitespace-nowrap text-white'>
            {title}
           </span>
        </div>
    );


}

Logo.propTypes={
    title:PropTypes.string,
    logo:PropTypes.string
}

Logo.defaultProps={
title:'Corona App',
logo:'https://cdnuploads.aa.com.tr/uploads/Contents/2020/06/26/thumbs_b_c_e061261a7650c13a105065359d2d54e0.jpg?v=221448'

}

export default Logo