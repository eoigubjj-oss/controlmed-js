
import { Ionicons } from '@expo/vector-icons';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const C = {
  bg: '#00182B',
  panel: '#052D4A',
  panel2: '#073653',
  border: '#104665',
  cyan: '#00D5CF',
  blue: '#159BFF',
  white: '#F4F8FC',
  muted: '#8DA9C0',
  green: '#00CDA6',
  yellow: '#FFC42F',
  orange: '#FF9F43',
  red: '#FF6262',
};

function Icon({ name, size = 20, color = C.muted }) {
  return <Ionicons name={name} size={size} color={color} />;
}

function SectionTitle({ icon, title, color = C.cyan, right }) {
  return (
    <View style={styles.sectionTitle}>
      <Icon name={icon} size={19} color={color} />
      <Text style={styles.sectionTitleText}>{title}</Text>
      <View style={{ flex: 1 }} />
      {right}
    </View>
  );
}

function MetricCard({ icon, title, value, subtitle, color, iconBg }) {
  return (
    <View style={styles.metricCard}>
      <View style={[styles.metricIcon, { backgroundColor: iconBg || '#064566' }]}>
        <Icon name={icon} size={22} color={color} />
      </View>
      <View style={styles.metricContent}>
        <Text style={styles.metricTitle}>{title}</Text>
        <Text style={styles.metricValue}>{value}</Text>
        <Text style={styles.metricSubtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

function AlertRow({ icon, color, title, description }) {
  return (
    <View style={styles.alertRow}>
      <Icon name={icon} size={17} color={color} />
      <View style={{ flex: 1 }}>
        <Text style={styles.alertTitle}>{title}</Text>
        <Text style={styles.alertDescription}>{description}</Text>
      </View>
    </View>
  );
}

function BottomItem({ icon, label, active = false, onPress }) {
  return (
    <TouchableOpacity
      style={styles.bottomItem}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Icon
        name={icon}
        size={21}
        color={active ? C.cyan : C.muted}
      />
      <Text style={[styles.bottomLabel, active && styles.bottomLabelActive]}>
        {label}
      </Text>
      {active && <View style={styles.activeLine} />}
    </TouchableOpacity>
  );
}

export default function HomeScreen() {
  const today = '15 de setembro de 2025';

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        backgroundColor={C.bg}
        barStyle="light-content"
      />

      <View style={styles.container}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* CABEÇALHO */}
          <View style={styles.header}>
            <Image
              source={require('../../../assets/images/logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />

            <TouchableOpacity style={styles.headerIcon}>
              <Icon name="notifications-outline" size={23} color={C.muted} />
              <View style={styles.notificationDot} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.avatar}>
              <Text style={styles.avatarText}>RM</Text>
            </TouchableOpacity>
          </View>

          {/* USUÁRIO E HOSPITAL */}
          <View style={styles.greeting}>
            <View style={{ flex: 1 }}>
              <Text style={styles.greetingTitle}>Olá, Igor !</Text>
              <View style={styles.hospitalRow}>
                <Icon name="business-outline" size={17} color={C.muted} />
                <Text style={styles.hospitalName}>Hospital Santa Maria</Text>
              </View>
            </View>

            <View style={styles.dateBox}>
              <Text style={styles.dateDay}>Segunda-feira</Text>
              <Text style={styles.dateText}>{today}</Text>
            </View>
          </View>

          {/* BUSCA */}
          <View style={styles.searchRow}>
            <View style={styles.searchBox}>
              <Icon name="search-outline" size={19} color={C.muted} />
              <TextInput
                style={styles.searchInput}
                placeholder="Buscar medicamento, equipamento ou material..."
                placeholderTextColor={C.muted}
                returnKeyType="search"
              />
            </View>

            <TouchableOpacity style={styles.scanButton}>
              <Icon name="scan-outline" size={22} color={C.cyan} />
            </TouchableOpacity>
          </View>

          {/* VISÃO GERAL */}
          <View style={styles.panel}>
            <SectionTitle
              icon="folder-open"
              title="Visão geral do estoque"
              right={<Icon name="chevron-forward" size={18} />}
            />

            <Text style={styles.description}>
              Acompanhe em tempo real a situação
              {'\n'}de todos os itens da sua instituição
            </Text>

            <View style={styles.overviewContent}>
              {/* GRÁFICO CIRCULAR ILUSTRATIVO */}
              <View style={styles.chartArea}>
                <View style={styles.chartOuter}>
                  <View style={styles.chartInner}>
                    <Text style={styles.chartPercent}>78%</Text>
                    <Text style={styles.chartLabel}>Estoque</Text>
                    <Text style={styles.chartLabel}>saudável</Text>
                  </View>
                </View>
              </View>

              <View style={styles.overviewDivider} />

              <View style={styles.stockLegend}>
                <View style={styles.legendRow}>
                  <View style={[styles.legendDot, { backgroundColor: C.green }]} />
                  <Text style={styles.legendNumber}>1.248</Text>
                  <Text style={styles.legendText}>Itens em estoque</Text>
                </View>
                <View style={styles.legendRow}>
                  <View style={[styles.legendDot, { backgroundColor: C.yellow }]} />
                  <Text style={styles.legendNumber}>156</Text>
                  <Text style={styles.legendText}>Estoque baixo</Text>
                </View>
                <View style={styles.legendRow}>
                  <View style={[styles.legendDot, { backgroundColor: C.orange }]} />
                  <Text style={styles.legendNumber}>28</Text>
                  <Text style={styles.legendText}>Próximos do vencimento</Text>
                </View>
                <View style={styles.legendRow}>
                  <View style={[styles.legendDot, { backgroundColor: C.red }]} />
                  <Text style={styles.legendNumber}>12</Text>
                  <Text style={styles.legendText}>Em falta</Text>
                </View>
              </View>
            </View>
          </View>

          {/* INDICADORES */}
          <View style={styles.metricsGrid}>
            <MetricCard
              icon="medkit"
              title="Medicamentos"
              value="842"
              subtitle="itens cadastrados"
              color="#18C8FF"
            />
            <MetricCard
              icon="pulse"
              title="Equipamentos"
              value="120"
              subtitle="itens cadastrados"
              color={C.cyan}
            />
            <MetricCard
              icon="cube"
              title="Estoque baixo"
              value="156"
              subtitle="itens precisam de atenção"
              color={C.yellow}
              iconBg="#073C63"
            />
            <MetricCard
              icon="time"
              title="Próximos do vencimento"
              value="28"
              subtitle="itens em até 30 dias"
              color={C.orange}
              iconBg="#3B3540"
            />
          </View>

          {/* PREVISÃO INTELIGENTE */}
          <View style={styles.panel}>
            <SectionTitle
              icon="trending-up"
              title="Previsão inteligente"
            />

            <Text style={styles.description}>
              Com base no consumo médio, analisamos os itens
              {'\n'}que podem acabar em breve
            </Text>

            <TouchableOpacity style={styles.predictionCard}>
              <View style={styles.medicineImageBox}>
                <Icon name="medkit" size={27} color={C.blue} />
              </View>

              <View style={styles.predictionInfo}>
                <Text style={styles.predictionName}>Dipirona 500mg</Text>
                <Text style={styles.predictionDetail}>
                  Estoque atual: 32 unidades
                </Text>
                <Text style={styles.predictionDetail}>
                  Consumo médio: 45 unidades/dia
                </Text>
                <Text style={styles.predictionWarning}>
                  Pode acabar em 7 dias
                </Text>
              </View>

              <View style={styles.barChart}>
                {[13, 20, 29, 39].map((h, i) => (
                  <View
                    key={i}
                    style={[
                      styles.bar,
                      {
                        height: h,
                        backgroundColor: i === 3 ? C.red : '#0879A9',
                      },
                    ]}
                  />
                ))}
              </View>

              <Icon name="chevron-forward" size={17} color={C.muted} />
            </TouchableOpacity>
          </View>

          {/* ALERTAS */}
          <View style={[styles.panel, styles.alertPanel]}>
            <SectionTitle
              icon="notifications"
              title="Alertas recentes"
            />

            <AlertRow
              icon="alert-circle"
              color={C.yellow}
              title="Soro fisiológico 0,9%"
              description="Estoque em nível crítico (8 unidades)"
            />

            <View style={styles.alertSeparator} />

            <AlertRow
              icon="warning"
              color={C.orange}
              title="Luva de procedimento"
              description="vencimento em 15 dias (lote 3287)"
            />
          </View>

          <View style={{ height: 15 }} />
        </ScrollView>

        {/* MENU INFERIOR */}
        <View style={styles.bottomNav}>
          <BottomItem icon="home" label="Início" active />
          <BottomItem icon="cube-outline" label="Estoque" />
          <BottomItem icon="camera-outline" label="Adicionar" />
          <BottomItem icon="bar-chart-outline" label="Unidades" />
          <BottomItem icon="business-outline" label="Config" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: C.bg,
  },

  container: {
    flex: 1,
    backgroundColor: C.bg,
    paddingHorizontal: 7,
  },

  scroll: {
    flex: 1,
  },

  scrollContent: {
    paddingBottom: 8,
  },

  header: {
    minHeight: 54,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },

  logo: {
    width: 155,
    height: 49,
  },

  headerIcon: {
    padding: 7,
    position: 'relative',
  },

  notificationDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: C.blue,
    position: 'absolute',
    top: 6,
    right: 7,
  },

  avatar: {
    width: 31,
    height: 31,
    borderRadius: 18,
    backgroundColor: '#28679D',
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarText: {
    color: C.white,
    fontSize: 11,
    fontWeight: '700',
  },

  greeting: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 7,
    marginTop: 5,
    marginBottom: 10,
  },

  greetingTitle: {
    color: C.white,
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 5,
  },

  hospitalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  hospitalName: {
    color: C.white,
    fontSize: 11,
  },

  dateBox: {
    borderLeftWidth: 1,
    borderLeftColor: C.border,
    paddingLeft: 6,
    marginLeft: 5,
  },

  dateDay: {
    color: C.muted,
    fontSize: 9,
    fontWeight: '600',
  },

  dateText: {
    color: C.white,
    fontSize: 8,
    fontWeight: '600',
    marginTop: 2,
  },

  searchRow: {
    flexDirection: 'row',
    gap: 7,
    marginBottom: 14,
  },

  searchBox: {
    flex: 1,
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 9,
    backgroundColor: C.panel,
    borderRadius: 9,
    gap: 5,
  },

  searchInput: {
    flex: 1,
    color: C.white,
    fontSize: 9,
    paddingVertical: 0,
  },

  scanButton: {
    width: 36,
    height: 35,
    borderRadius: 9,
    backgroundColor: C.panel,
    alignItems: 'center',
    justifyContent: 'center',
  },

  panel: {
    backgroundColor: C.panel,
    borderWidth: 1,
    borderColor: '#0A3B59',
    borderRadius: 12,
    padding: 10,
    marginBottom: 7,
    shadowColor: '#000',
    shadowOpacity: 0.16,
    shadowRadius: 4,
    elevation: 2,
  },

  sectionTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    minHeight: 20,
  },

  sectionTitleText: {
    color: C.white,
    fontSize: 11,
    fontWeight: '700',
  },

  description: {
    color: C.muted,
    fontSize: 8,
    lineHeight: 11,
    marginTop: 3,
    marginLeft: 26,
  },

  overviewContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    minHeight: 83,
  },

  chartArea: {
    width: '42%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  chartOuter: {
    width: 76,
    height: 76,
    borderRadius: 40,
    borderWidth: 8,
    borderColor: C.cyan,
    borderTopColor: '#087C9B',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotate: '-35deg' }],
  },

  chartInner: {
    alignItems: 'center',
    transform: [{ rotate: '35deg' }],
  },

  chartPercent: {
    color: C.white,
    fontSize: 13,
    fontWeight: '800',
  },

  chartLabel: {
    color: C.cyan,
    fontSize: 6,
  },

  overviewDivider: {
    width: 1,
    alignSelf: 'stretch',
    backgroundColor: '#22506A',
    marginHorizontal: 7,
  },

  stockLegend: {
    flex: 1,
    gap: 6,
  },

  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

  legendDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
  },

  legendNumber: {
    color: C.white,
    fontSize: 8,
    fontWeight: '700',
    minWidth: 26,
  },

  legendText: {
    color: '#C0D2E0',
    fontSize: 7,
    flexShrink: 1,
  },

  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 1,
  },

  metricCard: {
    width: '49%',
    minHeight: 55,
    backgroundColor: C.panel,
    borderWidth: 1,
    borderColor: '#0A3B59',
    borderRadius: 11,
    marginBottom: 7,
    padding: 7,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },

  metricIcon: {
    width: 34,
    height: 34,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },

  metricContent: {
    flex: 1,
  },

  metricTitle: {
    color: C.white,
    fontSize: 8,
  },

  metricValue: {
    color: C.white,
    fontSize: 16,
    fontWeight: '800',
    marginVertical: 1,
  },

  metricSubtitle: {
    color: C.muted,
    fontSize: 7,
  },

  predictionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#062843',
    borderRadius: 9,
    padding: 7,
    marginTop: 8,
    gap: 6,
  },

  medicineImageBox: {
    width: 46,
    height: 48,
    borderRadius: 7,
    backgroundColor: '#DDE8F0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  predictionInfo: {
    flex: 1,
  },

  predictionName: {
    color: C.white,
    fontSize: 11,
    fontWeight: '800',
    marginBottom: 3,
  },

  predictionDetail: {
    color: C.muted,
    fontSize: 7,
    marginBottom: 2,
  },

  predictionWarning: {
    color: C.red,
    fontSize: 7,
    fontWeight: '700',
  },

  barChart: {
    height: 42,
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 3,
    paddingBottom: 2,
  },

  bar: {
    width: 6,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },

  alertPanel: {
    paddingBottom: 4,
  },

  alertRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    paddingVertical: 8,
  },

  alertTitle: {
    color: C.white,
    fontSize: 9,
    fontWeight: '700',
  },

  alertDescription: {
    color: C.muted,
    fontSize: 7,
    marginTop: 3,
  },

  alertSeparator: {
    height: 1,
    backgroundColor: '#19425D',
  },

  bottomNav: {
    minHeight: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#03243D',
    borderWidth: 1,
    borderColor: '#105071',
    borderRadius: 17,
    marginBottom: 3,
    paddingTop: 4,
    paddingBottom: 3,
  },

  bottomItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },

  bottomLabel: {
    color: C.muted,
    fontSize: 8,
  },

  bottomLabelActive: {
    color: C.cyan,
  },

  activeLine: {
    height: 2,
    width: 19,
    borderRadius: 2,
    backgroundColor: C.cyan,
    marginTop: 1,
  },
});
