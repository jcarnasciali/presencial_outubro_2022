module.exports = {
  content: ['./src/**/*.{html,php,js}'],
  theme: {
    screens: {
      'xs': '520px',
      'sm': '700px',
      'md': '1000px',
      'lg': '1290px',
      'xl': '1420px',
      'xxl': '1700px',
       },
    extend: {
      backgroundImage: {
        'topo': "url('../img/bg_topo.jpg')",
        'experiencia': 'url("../img/bg_experiencia_presencial.jpg")',
        'conteudos': 'url("../img/bg_conteudos_em_destaque.jpg")',
        'horarios': 'url("../img/bg_horarios.jpg")',
        'local': 'url("../img/bg_local_do_evento.jpg")',
      },
      colors: {
        'jml-text-blue': '#3E5FFF',
        'jml-blue': '#0025FF',
        'jml-gray': '#3A3A3A',
        'jml-light-gray': '#535353',
        'jml-menu': '#D2CEDB',
        'jml-red': '#f93338',
      },
      borderRadius: {
        '26px': '26px',
      },
      fontSize: {
        '11px': '0.68rem',
        '13px': '0.81rem',
        '15px': '0.94rem',
        '22px': '22px',
        '28px': '28px',
        '39px': '39px',
      },
      lineHeight: {
        '13px': '13px',
      },
    },
  },
  plugins: [
  ],
}