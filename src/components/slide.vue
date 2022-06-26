<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/undraw_Experience_design_re_ca7l.png" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="../assets/undraw_Experience_design_re_ca7l.png" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="../assets/undraw_Experience_design_re_ca7l.png" class="d-block w-100" alt="..." />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previo</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Proximo</span>
    </button>
  </div>
</template>
<script></script>
<style scoped>
   *,
    *::after,
    *::before{
        padding:  0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        
    }
img{
    height: 500px;
}
</style>
