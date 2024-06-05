'use client';
import React, { useState, useCallback } from 'react';
import {
  Container,
  FormControl,
  InputLabel,
  Grid,
  Select,
  MenuItem,
  Button,
  Typography,
  Box,
  Divider,
  TextField,
  Tab,
  Tabs,
  RadioGroup,
  FormLabel,
  Radio,
  FormControlLabel,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
// import { PrintingSpecificationType } from '@/types/props-type';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
// import {
//   Material,
//   Micron,
//   Color,
//   Category,
// } from '@/utils/price-calculator-info';

const initialInputValue = {
  material: '',
  category: '',
  micron: 40,
  color: '1-4',
  breadth: 0,
  width: 0,
  quantityByDimension: 0,
  quantityByWeight: 0,
  date: new Date(),
  name: '',
  email: '',
  contact: null,
  acceptance: 'No',
  goodToBeCalled: 'No',
  VolumeBy: 'By Dimension',
};

const PriceCalculatorForm = () => {
  console.log('Render');
  const [quantityBy, setQuantityBy] = useState(0);
  const [showReviewForm, setShowReviewForm] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isValid },
    control,
  } = useForm({
    defaultValues: initialInputValue,
  });

  const handleOnSubmit = (data) => {
    console.log(data);
    reset();
    setShowReviewForm(false);
  };

  const handleQuantityChange = useCallback(
    (e, newValue) => {
      setQuantityBy(newValue);
      setValue('VolumeBy', newValue === 0 ? 'By Dimension' : 'By Weight');
      console.log('value calling render');
    },
    [setValue, setQuantityBy]
  );

  return (
    <>
      <Container maxWidth='md'>
        <Box
          mt={3}
          p={3}
          boxShadow={' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}
        >
          <form onSubmit={handleSubmit(handleOnSubmit)}>
            {!showReviewForm ? (
              <>
                <Box p={1}>
                  <Typography variant='h6'>Printing Specification</Typography>
                </Box>
                <Grid
                  spacing={2}
                  container
                >
                  <Grid
                    xs={12}
                    sm={3}
                    item
                  >
                    <FormControl fullWidth>
                      <InputLabel
                        size='small'
                        id='select-material'
                      >
                        Material
                      </InputLabel>
                      <Controller
                        name='material'
                        control={control}
                        render={({ field }) => (
                          <Select
                            error={Boolean(errors.material)}
                            label='Material'
                            size='small'
                            labelId='select-material'
                            {...register('material', { required: true })}
                            {...field}
                          >
                            {Material?.map((material) => {
                              return (
                                <MenuItem
                                  key={material.id}
                                  value={material.value}
                                >
                                  {material.value}
                                </MenuItem>
                              );
                            })}
                          </Select>
                        )}
                      />
                    </FormControl>
                  </Grid>

                  <Grid
                    xs={12}
                    sm={3}
                    item
                  >
                    <FormControl fullWidth>
                      <InputLabel
                        size='small'
                        id='select-category'
                      >
                        Category
                      </InputLabel>
                      <Controller
                        name='category'
                        control={control}
                        render={({ field }) => (
                          <Select
                            label='Category'
                            size='small'
                            labelId='select-category'
                            {...register('category', { required: true })}
                            {...field}
                          >
                            {Category?.map((category) => {
                              return (
                                <MenuItem
                                  key={category.id}
                                  value={category.value}
                                >
                                  {category.value}
                                </MenuItem>
                              );
                            })}
                          </Select>
                        )}
                      />
                    </FormControl>
                  </Grid>

                  <Grid
                    xs={12}
                    sm={3}
                    item
                  >
                    <FormControl fullWidth>
                      <InputLabel
                        size='small'
                        id='select-micron'
                      >
                        Micron
                      </InputLabel>
                      <Controller
                        name='micron'
                        control={control}
                        render={({ field }) => (
                          <Select
                            label='Micron'
                            size='small'
                            labelId='select-micron'
                            {...register('micron', { required: true })}
                            {...field}
                          >
                            {Micron?.map((mic) => {
                              return (
                                <MenuItem
                                  key={mic.id}
                                  value={mic.value}
                                >
                                  {mic.value}
                                </MenuItem>
                              );
                            })}
                          </Select>
                        )}
                      />
                    </FormControl>
                  </Grid>

                  <Grid
                    xs={12}
                    sm={3}
                    item
                  >
                    <FormControl fullWidth>
                      <InputLabel
                        size='small'
                        id='select-color'
                      >
                        Color
                      </InputLabel>
                      <Controller
                        name='color'
                        control={control}
                        render={({ field }) => (
                          <Select
                            label='Color'
                            size='small'
                            labelId='select-color'
                            {...register('color', { required: true })}
                            {...field}
                          >
                            {Color?.map((color) => {
                              return (
                                <MenuItem
                                  key={color.id}
                                  value={color.value}
                                >
                                  {color.value}
                                </MenuItem>
                              );
                            })}
                          </Select>
                        )}
                      />
                    </FormControl>
                  </Grid>
                </Grid>

                <Box mt={2}>
                  <Divider sx={{ my: 1 }} />
                  <Box p={1}>
                    <Typography variant='h6'>Printing Volume</Typography>
                  </Box>

                  <Box>
                    <Tabs
                      value={quantityBy}
                      onChange={handleQuantityChange}
                    >
                      <Tab label='By Dimension' />
                      <Tab label='By Weight' />
                    </Tabs>
                  </Box>
                  {!quantityBy ? (
                    <Box mt={4}>
                      <Grid
                        spacing={2}
                        container
                      >
                        <Grid
                          xs={12}
                          sm={3}
                          item
                        >
                          <FormControl fullWidth>
                            <TextField
                              type='number'
                              size='small'
                              label='Breadth'
                              {...register('breadth', { required: true })}
                            />
                          </FormControl>
                        </Grid>

                        <Grid
                          xs={12}
                          sm={3}
                          item
                        >
                          <FormControl fullWidth>
                            <TextField
                              type='number'
                              size='small'
                              label='Width'
                              {...register('width', { required: true })}
                            />
                          </FormControl>
                        </Grid>

                        <Grid
                          xs={12}
                          sm={3}
                          item
                        >
                          <FormControl fullWidth>
                            <TextField
                              type='number'
                              size='small'
                              label='Quantity (NOS)'
                              {...register('quantityByDimension', {
                                required: true,
                              })}
                            />
                          </FormControl>
                        </Grid>

                        <Grid
                          xs={12}
                          sm={3}
                          item
                        >
                          <FormControl fullWidth>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                              <Controller
                                name='date'
                                control={control}
                                rules={{ required: 'Please select a date' }}
                                render={({ field }) => (
                                  <DatePicker
                                    {...field}
                                    slotProps={{ textField: { size: 'small' } }}
                                    label='Expected order date'
                                    onChange={(date) => field.onChange(date)}
                                  />
                                )}
                              />
                            </LocalizationProvider>
                          </FormControl>
                        </Grid>
                      </Grid>
                    </Box>
                  ) : (
                    <Box mt={4}>
                      <Grid
                        spacing={2}
                        container
                      >
                        <Grid
                          item
                          xs={12}
                          sm={6}
                        >
                          <FormControl fullWidth>
                            <TextField
                              type='number'
                              size='small'
                              label='Quantity (Kg)'
                              {...register('quantityByWeight', {
                                required: true,
                              })}
                            />
                          </FormControl>
                        </Grid>

                        <Grid
                          xs={12}
                          sm={6}
                          item
                        >
                          <FormControl fullWidth>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                              <Controller
                                name='date'
                                control={control}
                                rules={{ required: 'Please select a date' }}
                                render={({ field }) => (
                                  <DatePicker
                                    slotProps={{ textField: { size: 'small' } }}
                                    {...field}
                                    label='Expected order date'
                                    onChange={(date) => field.onChange(date)}
                                  />
                                )}
                              />
                            </LocalizationProvider>
                          </FormControl>
                        </Grid>
                      </Grid>
                    </Box>
                  )}
                </Box>

                <Box
                  display={'flex'}
                  justifyContent={'center'}
                >
                  <Button
                    sx={{ mt: 3, mx: 1 }}
                    variant='contained'
                    disabled={!isValid}
                    onClick={() => {
                      setShowReviewForm(true);
                    }}
                  >
                    Next
                  </Button>
                  <Button
                    sx={{ mt: 3, mx: 1 }}
                    variant='contained'
                    onClick={() => {
                      setShowReviewForm(true);
                    }}
                  >
                    Skip
                  </Button>
                </Box>
              </>
            ) : (
              <Box>
                <Box p={2}>
                  <Typography variant='h6'>Not Have Clearity ? </Typography>
                </Box>
                <Grid
                  spacing={2}
                  container
                >
                  {/* Name Field */}
                  <Grid
                    item
                    xs={12}
                    sm={6}
                  >
                    <FormControl fullWidth>
                      <TextField
                        type='text'
                        label='Name'
                        size='small'
                        {...register('name')}
                      />
                    </FormControl>
                  </Grid>

                  {/* Contact Field */}
                  <Grid
                    item
                    xs={12}
                    sm={6}
                  >
                    <FormControl fullWidth>
                      <TextField
                        type='number'
                        size='small'
                        label='Contact'
                        {...register('contact')}
                      />
                    </FormControl>
                  </Grid>

                  {/* Email Field */}
                  <Grid
                    item
                    xs={12}
                  >
                    <FormControl fullWidth>
                      <TextField
                        type='email'
                        label='Email'
                        size='small'
                        {...register('email')}
                      />
                    </FormControl>
                  </Grid>

                  {/* Acceptance */}
                  <Grid
                    item
                    xs={6}
                    sm={6}
                  >
                    <FormControl
                      sx={{ p: 1 }}
                      fullWidth
                    >
                      <FormLabel>Acceptance</FormLabel>
                      <RadioGroup
                        row
                        name='acceptance'
                        defaultValue={'Yes'}
                      >
                        <FormControlLabel
                          value={'Yes'}
                          control={<Radio {...register('acceptance')} />}
                          label='Yes'
                        />
                        <FormControlLabel
                          value={'No'}
                          control={<Radio {...register('acceptance')} />}
                          label='No'
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>

                  {/* Good to be called */}
                  <Grid
                    item
                    xs={6}
                    sm={6}
                  >
                    <FormControl fullWidth>
                      <FormLabel>Good to be called</FormLabel>
                      <RadioGroup
                        row
                        name='goodToBeCalled'
                        defaultValue={'Yes'}
                      >
                        <FormControlLabel
                          {...register('goodToBeCalled')}
                          value={'Yes'}
                          control={<Radio />}
                          label='Yes'
                        />
                        <FormControlLabel
                          {...register('goodToBeCalled')}
                          value={'No'}
                          control={<Radio />}
                          label='No'
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
                <Box textAlign={'center'}>
                  <Button
                    sx={{ mt: 3, mx: 1 }}
                    variant='contained'
                    onClick={() => {
                      setShowReviewForm(false);
                    }}
                  >
                    Back
                  </Button>
                  <Button
                    sx={{ mt: 3, mx: 1 }}
                    variant='contained'
                    type='submit'
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            )}
          </form>
        </Box>
      </Container>
    </>
  );
};

export default PriceCalculatorForm;