<template>
  <div>
    Ini adalah Penagrang
    <h4>Daftar Pengarang</h4>
    <div class="form-group">
      <table class="table table-bordered" width="100%">
        <thead>
          <tr>
            <td>NO</td>
            <td>Nama Pengarang</td>
            <td>Taggal Dibuat</td>
          </tr>
        </thead>
        <tbody>

          <tr></tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">

// import * as Pgp from "pg-promise";
// const pgp = Pgp({ capSQL: true });
// const db = pgp("postgres://postgres:postgres@localhost:5432/db_komikita");

// export default {
//   data() {
//     return {
//       allPost: [],
//       posts: []
//     };
//   },
//   mounted() {
//     db.any("SELECT * FROM m_pengarang WHERE id_pengarang").then(function(data) {
//       alert(data);
//       // this.allPost = data.articles;
//       // data.articles.map((item, key) => {
//       //   if (item.description !== null && this.posts.length < 9) {
//       //     this.posts.push(item);
//       //   }
//       // });
//     });
//   }
// };
</script>
