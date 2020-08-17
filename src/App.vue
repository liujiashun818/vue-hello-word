<template>
  <div id="app">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">test</div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="1-9" theme="light" width="auto" :open-names="['1']">
            <Submenu name="1">
              <MenuItem name="1">
                <router-link to="/">home</router-link>
              </MenuItem>
              <!-- <MenuItem name="2">
                <router-link to="/HelloWorld">Go to helloWord</router-link>
              </MenuItem> -->
              <!-- <MenuItem name="3">
                <router-link to="/charts">Go to index-charts</router-link>
              </MenuItem>
              <MenuItem name="4">
                <router-link to="/xtrem">Go to xtrem</router-link>
              </MenuItem>
              <MenuItem name="5">
                <router-link to="/async">Go to async</router-link>
              </MenuItem>
              <MenuItem name="6">
                <router-link to="/router">router -dom</router-link>
              </MenuItem> -->
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <router-view></router-view>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {}
</script>