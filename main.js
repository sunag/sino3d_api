sino3d.load( 'master' );

// carregando showroom
sino3d.addEventListener('progress', ( e ) => {

	const percent = parseInt( e.value * 100 );

	console.log( 'PROGRESS', percent );
	
});

// showroom carregado
sino3d.addEventListener('complete', () => {

	sino3d.start();

	sino3d.setCarVersion( 'Master Furgão L1H1' );
	//sino3d.setCarVersion( 'Master Grand Furgão L2H2' );
	//sino3d.setCarVersion( 'Master Extra Furgão L3H2' );
	//sino3d.setCarVersion( 'Master Extra Vitré L3H2' );
	//sino3d.setCarVersion( 'Master Chassi Cabine L2H1' );
	//sino3d.setCarVersion( 'Master Minibus Executive L3H2' );

	sino3d.setCarColor( 0xC0C0C0 );
	
	console.log( 'DONE!' );

});

// precione 1 até 6 para alterar as versões
document.body.onkeydown = ( e ) => {

	const key = e.key;
	
		 if ( key == 1 ) sino3d.setCarVersion( 'Master Furgão L1H1' );
	else if ( key == 2 ) sino3d.setCarVersion( 'Master Grand Furgão L2H2' );
	else if ( key == 3 ) sino3d.setCarVersion( 'Master Extra Furgão L3H2' );
	else if ( key == 4 ) sino3d.setCarVersion( 'Master Extra Vitré L3H2' );
	else if ( key == 5 ) sino3d.setCarVersion( 'Master Chassi Cabine L2H1' );
	else if ( key == 6 ) sino3d.setCarVersion( 'Master Minibus Executive L3H2' );

}