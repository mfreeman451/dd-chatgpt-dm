package metrics

import (
	"context"
	"fmt"
	"github.com/thejerf/suture/v4"
	"net/http"
	"os"
	"strconv"

	"github.com/mfreeman451/dd-chatgpt-dm/server/internal/logger"
	"github.com/prometheus/client_golang/prometheus"
	"github.com/prometheus/client_golang/prometheus/promhttp"
)

type Service struct {
	suture.Service
	server *http.Server
	log    logger.Logger
}

func NewMetricsService(log logger.Logger) *Service {
	return &Service{log: log}
}

func (m *Service) Serve(ctx context.Context) error {
	// Register a counter metric to track incoming requests.
	requestsCounter := prometheus.NewCounter(prometheus.CounterOpts{
		Name: "dnd_requests_total",
		Help: "Total number of incoming requests",
	})
	prometheus.MustRegister(requestsCounter)
	http.Handle("/metrics", promhttp.Handler())

	httpPort, err := strconv.Atoi(os.Getenv("PROMETHEUS_PORT"))
	if err != nil {
		return fmt.Errorf("failed to convert PROMETHEUS_PORT to int: %w", err)
	}
	httpAddr := fmt.Sprintf(":%d", httpPort)
	m.log.Info().Msgf("Prometheus metrics server listening on %s", httpAddr)

	m.server = &http.Server{Addr: httpAddr}

	return m.server.ListenAndServe()
}

func (m *Service) Stop() {
	if m.server != nil {
		_ = m.server.Close()
	}
}
