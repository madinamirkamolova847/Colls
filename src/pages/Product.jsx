import React from 'react'

const Product = () => {
  return (
    <div>
      <div className='drink'>Coffee</div>
      <h2>Americano</h2>
      <div className='coffee'>
        <img src="https://assets.beanbox.com/blog_images/AB7ud4YSE6nmOX0iGlgA.jpeg" alt="x" />
        <p>Американо — это популярный кофейный напиток, состоящий из одного или двух шотов эспрессо, разбавленных горячей водой (обычно в соотношении от 1:1 до 1:4).</p>
      </div>
      <h2>Latte</h2>
      <div className='coffee'>
        <img src="https://images.aws.nestle.recipes/resized/edc408992aa67139c012c5525e0e4f70_caramel_latte_nescafe_1080_850.jpg" alt="x" />
        <p>Латте — это популярный кофейный напиток родом из Италиисостоящий из одной-двух порций эспрессо (1/3) и большого количества парового молока (2/3) с тонким слоем (около 1 см) нежнойвоздушной пены.</p>
      </div>
      <h2>Espresso</h2>
        <div className='coffee'>
        <img src="https://www.thespruceeats.com/thmb/HJrjMfXdLGHbgMhnM0fMkDx9XPQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-espresso-765702-hero-03_cropped-ffbc0c7cf45a46ff846843040c8f370c.jpg" alt="x" />
        <p>Эспрессо — это концентрированный кофейный напиток (25–35 мл) с плотной золотистой пенкой (крема́)получаемый путем пропускания горячей воды (92–95°C) под давлением около 9 бар через спрессованный мелкомолотый кофе</p>
      </div>
    </div>
  )
}

export default Product