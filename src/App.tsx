import React, { useState } from 'react'

import { useKeenSlider } from 'keen-slider/react'
import { Calendar } from 'phosphor-react'

import { Card } from '@siakit/card'
import { useTheme } from '@siakit/core'
import { Heading } from '@siakit/heading'
import { Flex, Grid } from '@siakit/layout'
import { Text } from '@siakit/text'
import { Tooltip } from '@siakit/tooltip'

import { Days } from './components/Days'
// import { Months } from './components/Months'
// import { Weeks } from './components/Weeks'
// import { Year } from './components/Year'

import 'keen-slider/keen-slider.min.css'
import './styles.css'
import { CardMonth, ColorDay } from './styled'

// import dayjs from 'dayjs'

console.log(Days)

function Carrossel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      spacing: 16,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <Flex width={20} direction="column" flex margin>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <CardMonth padding className="keen-slider__slide">
            <Flex flex direction="column">
              <Flex justify="center" flex>
                <Heading>Janeiro</Heading>
              </Flex>
              <Grid flex padding gap columns={7}>
                <Tooltip content="Domingo">
                  <Flex>
                    <Heading size="xs">D</Heading>
                  </Flex>
                </Tooltip>
                <Tooltip content="Segunda-feira">
                  <Flex>
                    <Heading size="xs">S</Heading>
                  </Flex>
                </Tooltip>
                <Tooltip content="Terça-feira">
                  <Flex>
                    <Heading size="xs">T</Heading>
                  </Flex>
                </Tooltip>
                <Tooltip content="Quarta-feira">
                  <Flex>
                    <Heading size="xs">Q</Heading>
                  </Flex>
                </Tooltip>
                <Tooltip content="Quinta-feira">
                  <Flex>
                    <Heading size="xs">Q</Heading>
                  </Flex>
                </Tooltip>
                <Tooltip content="Sexta-feira">
                  <Flex>
                    <Heading size="xs">S</Heading>
                  </Flex>
                </Tooltip>
                <Tooltip content="Sábado">
                  <Flex>
                    <Heading size="xs">S</Heading>
                  </Flex>
                </Tooltip>
                <Text>1</Text>
                <Text>2</Text>
                <Text>3</Text>
                <Text>4</Text>
                <Text>5</Text>
                <Text>6</Text>
                <Text>7</Text>
                <Text>8</Text>
                <Text>9</Text>
                <Text>10</Text>
                <ColorDay>
                  <Text>11</Text>
                </ColorDay>
                <Text>12</Text>
                <Text>13</Text>
                <Text>14</Text>
                <Text>15</Text>
                <Text>16</Text>
                <Text>17</Text>
                <Text>18</Text>
                <Text>19</Text>
                <Text>20</Text>
                <Text>21</Text>
                <Text>22</Text>
                <Text>23</Text>
                <Text>24</Text>
                <Text>25</Text>
                <Text>26</Text>
                <Text>27</Text>
                <Text>28</Text>
                <Text>29</Text>
                <Text>30</Text>
                <Text>31</Text>
                <Text>1</Text>
                <Text>2</Text>
                <Text>3</Text>
                <Text>4</Text>
              </Grid>
              <Flex align="end" justify="end" flex>
                <Heading size="xs">2023</Heading>
              </Flex>
            </Flex>
          </CardMonth>
          <CardMonth padding className="keen-slider__slide">
            <Flex flex direction="column">
              <Flex justify="center" flex>
                <Heading>Fevereio</Heading>
              </Flex>
              <Grid flex padding gap columns={7}>
                <Tooltip content="Domingo">
                  <Flex>
                    <Heading size="xs">D</Heading>
                  </Flex>
                </Tooltip>
                <Tooltip content="Segunda-feira">
                  <Flex>
                    <Heading size="xs">S</Heading>
                  </Flex>
                </Tooltip>
                <Tooltip content="Terça-feira">
                  <Flex>
                    <Heading size="xs">T</Heading>
                  </Flex>
                </Tooltip>
                <Tooltip content="Quarta-feira">
                  <Flex>
                    <Heading size="xs">Q</Heading>
                  </Flex>
                </Tooltip>
                <Tooltip content="Quinta-feira">
                  <Flex>
                    <Heading size="xs">Q</Heading>
                  </Flex>
                </Tooltip>
                <Tooltip content="Sexta-feira">
                  <Flex>
                    <Heading size="xs">S</Heading>
                  </Flex>
                </Tooltip>
                <Tooltip content="Sábado">
                  <Flex>
                    <Heading size="xs">S</Heading>
                  </Flex>
                </Tooltip>
                <Text>29</Text>
                <Text>30</Text>
                <Text>31</Text>
                <Text>1</Text>
                <Text>2</Text>
                <Text>3</Text>
                <Text>4</Text>
                <Text>1</Text>
                <Text>2</Text>
                <Text>3</Text>
                <Text>4</Text>
                <Text>5</Text>
                <Text>6</Text>
                <Text>7</Text>
                <Text>8</Text>
                <Text>9</Text>
                <Text>10</Text>
                <Text>11</Text>
                <Text>12</Text>
                <Text>13</Text>
                <Text>14</Text>
                <Text>15</Text>
                <Text>16</Text>
                <Text>17</Text>
                <Text>18</Text>
                <Text>19</Text>
                <Text>20</Text>
                <Text>21</Text>
                <Text>22</Text>
                <Text>23</Text>
                <Text>24</Text>
                <Text>25</Text>
                <Text>26</Text>
                <Text>27</Text>
                <Text>28</Text>
              </Grid>
              <Flex align="end" justify="end" flex>
                <Heading size="xs">2023</Heading>
              </Flex>
            </Flex>
          </CardMonth>
          <CardMonth padding className="keen-slider__slide">
            <Flex flex direction="column">
              <Flex justify="center" flex>
                <Heading>Março</Heading>
              </Flex>
              <Grid flex padding gap columns={7}>
                <Tooltip content="Domingo">
                  <Flex>
                    <Heading size="xs">D</Heading>
                  </Flex>
                </Tooltip>
                <Tooltip content="Segunda-feira">
                  <Flex>
                    <Heading size="xs">S</Heading>
                  </Flex>
                </Tooltip>
                <Tooltip content="Terça-feira">
                  <Flex>
                    <Heading size="xs">T</Heading>
                  </Flex>
                </Tooltip>
                <Tooltip content="Quarta-feira">
                  <Flex>
                    <Heading size="xs">Q</Heading>
                  </Flex>
                </Tooltip>
                <Tooltip content="Quinta-feira">
                  <Flex>
                    <Heading size="xs">Q</Heading>
                  </Flex>
                </Tooltip>
                <Tooltip content="Sexta-feira">
                  <Flex>
                    <Heading size="xs">S</Heading>
                  </Flex>
                </Tooltip>
                <Tooltip content="Sábado">
                  <Flex>
                    <Heading size="xs">S</Heading>
                  </Flex>
                </Tooltip>
                <Text>1</Text>
                <Text>2</Text>
                <Text>3</Text>
                <Text>4</Text>
                <Text>5</Text>
                <Text>6</Text>
                <Text>7</Text>
                <Text>8</Text>
                <Text>9</Text>
                <Text>10</Text>
                <Text>11</Text>
                <Text>12</Text>
                <Text>13</Text>
                <Text>14</Text>
                <Text>15</Text>
                <Text>16</Text>
                <Text>17</Text>
                <Text>18</Text>
                <Text>19</Text>
                <Text>20</Text>
                <Text>21</Text>
                <Text>22</Text>
                <Text>23</Text>
                <Text>24</Text>
                <Text>25</Text>
                <Text>26</Text>
                <Text>27</Text>
                <Text>28</Text>
                <Text>29</Text>
                <Text>30</Text>
                <Text>31</Text>
                <Text>1</Text>
                <Text>2</Text>
                <Text>3</Text>
                <Text>4</Text>
              </Grid>
              <Flex align="end" justify="end" flex>
                <Heading size="xs">2023</Heading>
              </Flex>
            </Flex>
          </CardMonth>
          <CardMonth padding className="keen-slider__slide">
            <Flex flex direction="column">
              <Flex justify="center" flex>
                <Heading>Abril</Heading>
              </Flex>
              <Grid flex padding gap columns={7}>
                <Tooltip content="Domingo">
                  <Flex>
                    <Heading size="xs">D</Heading>
                  </Flex>
                </Tooltip>
                <Tooltip content="Segunda-feira">
                  <Flex>
                    <Heading size="xs">S</Heading>
                  </Flex>
                </Tooltip>
                <Tooltip content="Terça-feira">
                  <Flex>
                    <Heading size="xs">T</Heading>
                  </Flex>
                </Tooltip>
                <Tooltip content="Quarta-feira">
                  <Flex>
                    <Heading size="xs">Q</Heading>
                  </Flex>
                </Tooltip>
                <Tooltip content="Quinta-feira">
                  <Flex>
                    <Heading size="xs">Q</Heading>
                  </Flex>
                </Tooltip>
                <Tooltip content="Sexta-feira">
                  <Flex>
                    <Heading size="xs">S</Heading>
                  </Flex>
                </Tooltip>
                <Tooltip content="Sábado">
                  <Flex>
                    <Heading size="xs">S</Heading>
                  </Flex>
                </Tooltip>
                <Text>29</Text>
                <Text>30</Text>
                <Text>31</Text>
                <Text>1</Text>
                <Text>2</Text>
                <Text>3</Text>
                <Text>4</Text>
                <Text>5</Text>
                <Text>6</Text>
                <Text>7</Text>
                <Text>8</Text>
                <Text>9</Text>
                <Text>10</Text>
                <Text>11</Text>
                <Text>12</Text>
                <Text>13</Text>
                <Text>14</Text>
                <Text>15</Text>
                <Text>16</Text>
                <Text>17</Text>
                <Text>18</Text>
                <Text>19</Text>
                <Text>20</Text>
                <Text>21</Text>
                <Text>22</Text>
                <Text>23</Text>
                <Text>24</Text>
                <Text>25</Text>
                <Text>26</Text>
                <Text>27</Text>
                <Text>28</Text>
                <Text>29</Text>
                <Text>30</Text>
                <Text>1</Text>
                <Text>2</Text>
              </Grid>
              <Flex align="end" justify="end" flex>
                <Heading size="xs">2023</Heading>
              </Flex>
            </Flex>
          </CardMonth>
          <CardMonth padding className="keen-slider__slide">
            <Flex flex direction="column">
              <Flex justify="center" flex>
                <Heading>Maio</Heading>
              </Flex>
              <Grid flex padding gap columns={7}>
                <Tooltip content="Domingo">
                  <Flex>
                    <Heading size="xs">D</Heading>
                  </Flex>
                </Tooltip>
                <Tooltip content="Segunda-feira">
                  <Flex>
                    <Heading size="xs">S</Heading>
                  </Flex>
                </Tooltip>
                <Tooltip content="Terça-feira">
                  <Flex>
                    <Heading size="xs">T</Heading>
                  </Flex>
                </Tooltip>
                <Tooltip content="Quarta-feira">
                  <Flex>
                    <Heading size="xs">Q</Heading>
                  </Flex>
                </Tooltip>
                <Tooltip content="Quinta-feira">
                  <Flex>
                    <Heading size="xs">Q</Heading>
                  </Flex>
                </Tooltip>
                <Tooltip content="Sexta-feira">
                  <Flex>
                    <Heading size="xs">S</Heading>
                  </Flex>
                </Tooltip>
                <Tooltip content="Sábado">
                  <Flex>
                    <Heading size="xs">S</Heading>
                  </Flex>
                </Tooltip>
                <Text>26</Text>
                <Text>27</Text>
                <Text>28</Text>
                <Text>29</Text>
                <Text>30</Text>
                <Text>1</Text>
                <Text>2</Text>
                <Text>3</Text>
                <Text>4</Text>
                <Text>5</Text>
                <Text>6</Text>
                <Text>7</Text>
                <Text>8</Text>
                <Text>9</Text>
                <Text>10</Text>
                <Text>11</Text>
                <Text>12</Text>
                <Text>13</Text>
                <Text>14</Text>
                <Text>15</Text>
                <Text>16</Text>
                <Text>17</Text>
                <Text>18</Text>
                <Text>19</Text>
                <Text>20</Text>
                <Text>21</Text>
                <Text>22</Text>
                <Text>23</Text>
                <Text>24</Text>
                <Text>25</Text>
                <Text>26</Text>
                <Text>27</Text>
                <Text>28</Text>
                <Text>29</Text>
                <Text>30</Text>
              </Grid>
              <Flex align="end" justify="end" flex>
                <Heading size="xs">2023</Heading>
              </Flex>
            </Flex>
          </CardMonth>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}

        {loaded && instanceRef.current && (
          <div className="dots">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx)
                  }}
                  className={'dot' + (currentSlide === idx ? ' active' : '')}
                ></button>
              )
            })}
          </div>
        )}
      </div>
    </Flex>
  )
}

function Arrow(props: any) {
  const disabeld = props.disabled ? ' arrow--disabled' : ''
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? 'arrow--left' : 'arrow--right'
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}

export function App() {
  const { togggleTheme, changeColor, theme } = useTheme()

  changeColor('violet')

  function GetDaysCalendar(month: any, year: any) {
    const firstDayOfWeek = new Date(year, month, 1).getDay() - 1

    // console.log(firstDayOfWeek)

    const array = []

    for (let i = -firstDayOfWeek; i < 42 - firstDayOfWeek; i++) {
      const dt = new Date(year, month, i)
      array.push(dt.getDate())
      // console.log(dt.getDate())
    }
    return array

    // console.log(firstDayOfWeek,lastDayOfThisMonth)
  }

  const now = new Date()
  const month = now.getMonth()
  const year = now.getFullYear()
  GetDaysCalendar(month, year)

  console.log(now)
  console.log(month)
  console.log(year)

  return (
    <Flex flex>
      <Flex width={320} direction="column">
        <Flex padding align="center" gap>
          <Tooltip content="Click to change theme">
            <button
              style={{
                color: '#6e56cf',
                cursor: 'pointer',
                backgroundColor: 'transparent',
                border: 'none',
              }}
              onClick={() => {
                if (theme === 'dark') {
                  togggleTheme('light')
                }
                if (theme === 'light') {
                  togggleTheme('dark')
                }
              }}
            >
              <Calendar size={46} />
            </button>
          </Tooltip>
          <Heading>Calendar</Heading>
        </Flex>
        <Flex flex margin="32px 0 0 0">
          <Carrossel />
        </Flex>
      </Flex>
      <Flex flex direction="column">
        <Flex align="center" justify="center" height={64}>
          <Heading>Janeiro</Heading>
        </Flex>
        <Flex>
          <Grid flex gap={8} margin="16px 16px -8px 16px" columns={7}>
            <Flex height="36px" align="center" justify="center">
              <Text>Domingo</Text>
            </Flex>
            <Flex height="36px" align="center" justify="center">
              <Text>Segunda-feira</Text>
            </Flex>
            <Flex height="36px" align="center" justify="center">
              <Text>Terça-feira</Text>
            </Flex>
            <Flex height="36px" align="center" justify="center">
              <Text>Quarta-feira</Text>
            </Flex>
            <Flex height="36px" align="center" justify="center">
              <Text>Quinta-feira</Text>
            </Flex>
            <Flex height="36px" align="center" justify="center">
              <Text>Sexta-feira</Text>
            </Flex>
            <Flex height="36px" align="center" justify="center">
              <Text>Sábado</Text>
            </Flex>
          </Grid>
        </Flex>

        {/* <Card padding gap direction="column">
            <Flex>qtd dias no mês: {dayjs().daysInMonth()}</Flex>

            <Flex>dia de hoje: {dayjs().date()}</Flex>

            <Flex>locale: {dayjs().locale()}</Flex>

            <Flex>data de hoje: {dayjs().millisecond()}</Flex>

            <Flex>month: {dayjs().month() === 1 ? 'Fevereiro' : ''}</Flex>

            <Flex>year: {dayjs().year()}</Flex>
          </Card> */}
        <Grid gap={8} flex padding columns={7}>
          {GetDaysCalendar(month, year).map((days) =>
            days === new Date().getDate() ? (
              <CardMonth key={days}>
                <Text>{days}</Text>
              </CardMonth>
            ) : (
              <Card key={days} align="center" justify="center">
                <Text>{days}</Text>
              </Card>
            ),
          )}
          {/* <Card align="center" justify="center">
            <Text>2</Text>
          </Card>
          <Card align="center" justify="center">
            <Text>3</Text>
          </Card>
          <Card align="center" justify="center">
            <Text>4</Text>
          </Card>
          <Card align="center" justify="center">
            <Text>5</Text>
          </Card>
          <Card align="center" justify="center">
            <Text>6</Text>
          </Card>
          <Card align="center" justify="center">
            <Text>7</Text>
          </Card>
          <Card align="center" justify="center">
            <Text>8</Text>
          </Card>
          <Card align="center" justify="center">
            <Text>9</Text>
          </Card>
          <Card align="center" justify="center">
            <Text>10</Text>
          </Card>
          <CardMonth align="center" justify="center">
            <Heading size="xs">11</Heading>
          </CardMonth>
          <Card align="center" justify="center">
            <Text>12</Text>
          </Card>
          <Card align="center" justify="center">
            <Text>13</Text>
          </Card>
          <Card align="center" justify="center">
            <Text>14</Text>
          </Card>
          <Card align="center" justify="center">
            <Text>15</Text>
          </Card>
          <Card align="center" justify="center">
            <Text>16</Text>
          </Card>
          <Card align="center" justify="center">
            <Text>17</Text>
          </Card>
          <Card align="center" justify="center">
            <Text>18</Text>
          </Card>
          <Card align="center" justify="center">
            <Text>19</Text>
          </Card>
          <Card align="center" justify="center">
            <Text>20</Text>
          </Card>
          <Card align="center" justify="center">
            <Text>21</Text>
          </Card>
          <Card align="center" justify="center">
            <Text>22</Text>
          </Card>
          <Card align="center" justify="center">
            <Text>23</Text>
          </Card>
          <Card align="center" justify="center">
            <Text>24</Text>
          </Card>
          <Card align="center" justify="center">
            <Text>25</Text>
          </Card>
          <Card align="center" justify="center">
            <Text>26</Text>
          </Card>
          <Card align="center" justify="center">
            <Text>27</Text>
          </Card>
          <Card align="center" justify="center">
            <Text>28</Text>
          </Card>
          <Card align="center" justify="center">
            <Text>29</Text>
          </Card>
          <Card align="center" justify="center">
            <Text>30</Text>
          </Card>
          <Card align="center" justify="center">
            <Text>31</Text>
          </Card>
          <Card align="center" justify="center">
            <Text>1</Text>
          </Card>
          <Card align="center" justify="center">
            <Text>2</Text>
          </Card>
          <Card align="center" justify="center">
            <Text>3</Text>
          </Card>
          <Card align="center" justify="center">
            <Text>4</Text>
          </Card> */}
        </Grid>
        <Flex align="end" justify="end" padding="0 16px 16px 16px">
          <Heading>2023</Heading>
        </Flex>
      </Flex>
    </Flex>
  )
}
